# main.py
import json, os, re, textwrap
from datetime import datetime, timedelta
from collections import Counter, defaultdict

# Try optional Mongo support if env USE_MONGO=1 and pymongo installed
USE_MONGO = os.getenv("USE_MONGO", "0") == "1"
MONGO_URI = os.getenv("MONGO_URI", "mongodb://127.0.0.1:27017")
MONGO_DB = os.getenv("MONGO_DB", "recruitmentDB")

if USE_MONGO:
    try:
        from pymongo import MongoClient
        client = MongoClient(MONGO_URI)
        db = client[MONGO_DB]
    except Exception as e:
        print("MongoDB connection failed:", e)
        USE_MONGO = False

DATA_DIR = "data"
CANDIDATES_PATH = os.path.join(DATA_DIR, "candidates.json")
JOBS_PATH = os.path.join(DATA_DIR, "jobs.json")
SHORTLISTS_PATH = os.path.join(DATA_DIR, "shortlists.json")

def load_data():
    if USE_MONGO:
        candidates = list(db.candidates.find({}, {"_id":0}))
        jobs = list(db.jobs.find({}, {"_id":0}))
        return candidates, jobs
    else:
        with open(CANDIDATES_PATH, "r", encoding="utf-8") as f:
            candidates = json.load(f)
        with open(JOBS_PATH, "r", encoding="utf-8") as f:
            jobs = json.load(f)
        # Ensure shortlists file exists
        if not os.path.exists(SHORTLISTS_PATH):
            with open(SHORTLISTS_PATH, "w", encoding="utf-8") as sf:
                json.dump({}, sf)
        return candidates, jobs

# Helpers
def safe_date(date_str):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d").date()
    except:
        return None

# Simple intent classifier (very small)
def classify_intent(text):
    t = text.strip().lower()
    if t.startswith("find") or "find" in t or "chercher" in t or "recherche" in t:
        return "FIND"
    if t.startswith("save") or t.startswith("sauve") or t.startswith("save "):
        return "SAVE"
    if t.startswith("draft") or "draft" in t or "email" in t or "rédiger" in t:
        return "DRAFT"
    if "analytics" in t or "analyse" in t or "show analytics" in t or "stat" in t:
        return "ANALYTICS"
    if t.startswith("show shortlist") or t.startswith("affiche shortlist"):
        return "SHOW_SHORTLIST"
    if t in ("exit","quit","q"):
        return "EXIT"
    return "UNKNOWN"

# Parse free-text query
def parse_query(text, known_skills=None, known_locations=None):
    s = text.lower()
    skills = []
    location = None
    minExp = None
    maxExp = None
    availabilityWindowDays = None

    # known lists
    known_skills = known_skills or []
    known_locations = known_locations or []

    # skills by keyword matching
    for sk in known_skills:
        if re.search(r'\b' + re.escape(sk.lower()) + r'\b', s):
            skills.append(sk)

    # location: "in <city>" or "à <city>" or match known locations
    m = re.search(r'\bin\s+([a-zA-Z\-]+)', s)
    if not m:
        m = re.search(r' à ([a-zA-Z\-]+)', s)
    if m:
        location = m.group(1).capitalize()
    else:
        for loc in known_locations:
            if re.search(r'\b' + re.escape(loc.lower()) + r'\b', s):
                location = loc
                break

    # experience: patterns like "0-2", "0–2 years", "0–2y", "0–2 ans"
    m = re.search(r'(\d+)\s*[–-]\s*(\d+)', s)
    if m:
        minExp = int(m.group(1))
        maxExp = int(m.group(2))
    else:
        # single number like "2 years"
        m2 = re.search(r'(\d+)\s*(?:years|year|ans|an|y)\b', s)
        if m2:
            minExp = 0
            maxExp = int(m2.group(1))

    # availability: "this month", "available this month", "next 45 days", "available in 10 days"
    if "this month" in s or "ce mois" in s or "ce mois-ci" in s or "available this month" in s:
        availabilityWindowDays = 30
    elif "this week" in s or "cette semaine" in s:
        availabilityWindowDays = 7
    else:
        m = re.search(r'next\s+(\d+)\s+days', s)
        if m:
            availabilityWindowDays = int(m.group(1))
        m2 = re.search(r'available in (\d+)\s*days', s)
        if m2:
            availabilityWindowDays = int(m2.group(1))
        m3 = re.search(r'disponible dans (\d+)\s*jours', s)
        if m3:
            availabilityWindowDays = int(m3.group(1))

    return {
        "skills": list(dict.fromkeys(skills)),
        "location": location,
        "minExp": minExp,
        "maxExp": maxExp,
        "availabilityWindowDays": availabilityWindowDays
    }

# Scoring function according to spec
def search_candidates(candidates, filters, top_n=5):
    now = datetime.now().date()
    results = []
    required_skills = filters.get("skills", [])
    for cand in candidates:
        score = 0
        reasons = []
        # skill matches: +2 per required skill match
        matched_skills = []
        for sk in required_skills:
            if any(sk.lower() == cs.lower() for cs in cand.get("skills", [])):
                score += 2
                matched_skills.append(sk)
        if matched_skills:
            reasons.append(f"{'+'.join(matched_skills)} match (+{2*len(matched_skills)})")
        # location exact match +1
        if filters.get("location") and cand.get("location"):
            if filters["location"].lower() == cand["location"].lower():
                score += 1
                reasons.append(f"{cand['location']} (+1)")
        # experience within user range ±1 year +1
        minE = filters.get("minExp")
        maxE = filters.get("maxExp")
        exp = cand.get("experienceYears")
        if minE is not None and maxE is not None and exp is not None:
            if exp >= (minE - 1) and exp <= (maxE + 1):
                score += 1
                reasons.append(f"{exp}y fits (±1) (+1)")
        # availability within next 45 days +1 (spec)
        avail_days = filters.get("availabilityWindowDays")
        # we give the +1 if candidate is available within next 45 days OR within requested window if provided
        cand_date = safe_date(cand.get("availabilityDate",""))
        if cand_date:
            days_to_avail = (cand_date - now).days
            if days_to_avail <= 45:
                score += 1
                reasons.append(f"available in {days_to_avail} days (+1)")
        results.append({
            "candidate": cand,
            "score": score,
            "reason": " / ".join(reasons) if reasons else "no strong match"
        })
    # sort
    results.sort(key=lambda x: (-x["score"], x["candidate"].get("experienceYears", 0)))
    return results[:top_n]

# Save shortlist by indices from last search results (1-based indices)
def save_shortlist(name, indices, last_search_results):
    # resolve indices to candidate emails
    selected = []
    for i in indices:
        if 1 <= i <= len(last_search_results):
            selected.append(last_search_results[i-1]["candidate"])
    # load existing
    if os.path.exists(SHORTLISTS_PATH):
        with open(SHORTLISTS_PATH, "r", encoding="utf-8") as f:
            shortlists = json.load(f)
    else:
        shortlists = {}
    shortlists[name] = selected
    with open(SHORTLISTS_PATH, "w", encoding="utf-8") as f:
        json.dump(shortlists, f, indent=2, ensure_ascii=False)
    return True

# Draft email: recipients is list of candidate dicts
def draft_email(recipients, jobs, job_title, tone="friendly"):
    # find job
    job = next((j for j in jobs if j["title"].lower() == job_title.lower()), None)
    if not job:
        job = jobs[0] if jobs else {"title": job_title, "location":"", "skillsRequired":[]}
    # subject suggestion
    subject = f"Opportunity: {job['title']} at {job.get('location','')} — Quick chat?"
    # body
    if len(recipients) == 1:
        r = recipients[0]
        greeting = f"Hi {r.get('firstName','')},"
        intro = f"I saw your profile and thought you might be a great fit for a {job['title']} in {job.get('location','')}. We work with {', '.join(job.get('skillsRequired',[]))}."
        personal = r.get("notes","")
        closing = "Would you be open to a quick 15-min chat? Best, HR Team"
    else:
        greeting = "Hi,"
        intro = f"We're hiring for a {job['title']} in {job.get('location','')}. The role involves {', '.join(job.get('skillsRequired',[]))}."
        personal = ""
        closing = "If you're interested, reply and we'll schedule a quick chat. Best, HR Team"
    if tone and tone.lower().startswith("formal"):
        closing = "Kind regards,\nRecruiting Team"
    text = "\n\n".join([greeting, intro, personal, closing]).strip()
    return {"subject": subject, "text": text, "job": job}

# HTML wrapper
def html_template(email):
    body_html = "<br>".join(email["text"].split("\n"))
    html = f"""<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{email['subject']}</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; line-height:1.4; color:#111;">
  <div style="max-width:700px; margin:20px auto; padding:20px; border:1px solid #eee; border-radius:6px;">
    <h2 style="margin-top:0;">{email['subject']}</h2>
    <div>{body_html}</div>
    <p style="margin-top:20px; color:#666; font-size:12px;">This is a recruitment outreach — reply to schedule a chat.</p>
  </div>
</body>
</html>"""
    return html

# Analytics over candidate set
def analytics_summary(candidates):
    stages = Counter([c.get("stage","UNKNOWN") for c in candidates])
    skills_flat = []
    for c in candidates:
        for s in c.get("skills", []):
            skills_flat.append(s)
    top_skills = Counter([s for s in skills_flat]).most_common(3)
    return {"countByStage": dict(stages), "topSkills": top_skills}

# CLI
def repl():
    candidates, jobs = load_data()
    known_skills = sorted({s for c in candidates for s in c.get("skills",[])})
    known_locations = sorted({c.get("location") for c in candidates if c.get("location")})
    last_search_results = []
    print("HR Agent CLI — tapez 'exit' pour quitter. Exemples: 'Find 5 React interns in Casablanca, 0-2y, available this month'")
    while True:
        try:
            cmd = input("\n> ").strip()
        except EOFError:
            break
        intent = classify_intent(cmd)
        if intent == "EXIT":
            print("Au revoir.")
            break
        if intent == "FIND":
            filters = parse_query(cmd, known_skills=known_skills, known_locations=known_locations)
            top_n = 5
            m = re.search(r'find\s+(\d+)', cmd.lower())
            if m:
                top_n = int(m.group(1))
            results = search_candidates(candidates, filters, top_n=top_n)
            last_search_results = results
            if not results:
                print("Aucun résultat.")
            else:
                print(f"Top {len(results)} results:")
                for i, r in enumerate(results, start=1):
                    c = r["candidate"]
                    print(f"#{i} {c['firstName']} {c['lastName']} — {c['email']} — {c.get('location')} — {c.get('experienceYears')}y | score {r['score']} | {r['reason']}")
        elif intent == "SAVE":
            # parse pattern: Save #1 #3 as "Name"
            m = re.search(r'save\s+(.+?)\s+as\s+["\']?([^"\']+)["\']?', cmd, re.IGNORECASE)
            if not m:
                # fallback parse indices and name
                idxs = re.findall(r'#(\d+)', cmd)
                name_m = re.search(r'as\s+["\']?([^"\']+)', cmd, re.IGNORECASE)
                if idxs and name_m:
                    indices = [int(x) for x in idxs]
                    name = name_m.group(1).strip()
                else:
                    print("Format: Save #1 #3 as \"ShortlistName\"")
                    continue
            else:
                idxs_part = m.group(1)
                name = m.group(2)
                indices = [int(x) for x in re.findall(r'#(\d+)', idxs_part)]
            ok = save_shortlist(name, indices, last_search_results)
            if ok:
                print(f"Shortlist '{name}' saved with {len(indices)} candidates.")
        elif intent == "DRAFT":
            # Example: Draft an outreach email for "FE-Intern-A" using job "Frontend Intern" in friendly tone
            # parse shortlist name in quotes
            list_m = re.search(r'for\s+["\']([^"\']+)["\']', cmd, re.IGNORECASE)
            job_m = re.search(r'using job\s+["\']([^"\']+)["\']', cmd, re.IGNORECASE)
            tone_m = re.search(r'in\s+(\w+)\s*tone', cmd, re.IGNORECASE)
            tone = tone_m.group(1) if tone_m else "friendly"
            recipients = []
            if list_m:
                name = list_m.group(1)
                with open(SHORTLISTS_PATH, "r", encoding="utf-8") as f:
                    shortlists = json.load(f)
                recipients = shortlists.get(name, [])
                if not recipients:
                    print(f"Shortlist '{name}' not found or empty.")
                    continue
            else:
                # maybe user asked for a single candidate by index: "#1"
                idx_m = re.search(r'#(\d+)', cmd)
                if idx_m and last_search_results:
                    idx = int(idx_m.group(1))
                    if 1 <= idx <= len(last_search_results):
                        recipients = [last_search_results[idx-1]["candidate"]]
            job_title = job_m.group(1) if job_m else (jobs[0]["title"] if jobs else "Role")
            if not recipients:
                print("No recipients found. Use a shortlist name: for \"ShortlistName\" or reference #1 from the last search.")
                continue
            email = draft_email(recipients, jobs, job_title, tone=tone)
            html = html_template(email)
            # Print preview
            print("\nSUBJECT: " + email["subject"])
            print("\n--- Plain text ---\n")
            print(email["text"])
            print("\n--- HTML preview (string) ---\n")
            print(html[:2000] + ("\n... (truncated)" if len(html)>2000 else ""))
            # allow one edit to subject or closing
            edit = input("\nEdit subject? (enter new subject or press Enter to keep): ").strip()
            if edit:
                email["subject"] = edit
            edit_close = input("Edit closing line? (enter new closing or press Enter to keep): ").strip()
            if edit_close:
                # replace last paragraph (simple heuristic)
                parts = email["text"].split("\n")
                parts[-1] = edit_close
                email["text"] = "\n".join(parts)
            print("\n--- Re-preview ---")
            print("\nSUBJECT: " + email["subject"])
            print("\n" + email["text"])
            print("\nHTML (truncated):")
            print(html_template(email)[:2000] + ("\n... (truncated)" if len(html_template(email))>2000 else ""))
        elif intent == "ANALYTICS":
            summary = analytics_summary(candidates)
            print("Pipeline by stage:")
            for k,v in summary["countByStage"].items():
                print(f"  {k} = {v}")
            print("Top skills:")
            for s,cnt in summary["topSkills"]:
                print(f"  {s} ({cnt})")
        elif intent == "SHOW_SHORTLIST":
            m = re.search(r'show shortlist\s+["\']?([^"\']+)["\']?', cmd, re.IGNORECASE)
            if m:
                name = m.group(1)
                with open(SHORTLISTS_PATH, "r", encoding="utf-8") as f:
                    shortlists = json.load(f)
                lst = shortlists.get(name)
                if not lst:
                    print("Rien trouvé.")
                else:
                    for i,c in enumerate(lst, start=1):
                        print(f"#{i} {c.get('firstName')} {c.get('lastName')} - {c.get('email')}")
            else:
                print("Usage: Show shortlist \"Name\"")
        else:
            print("Commande non reconnue. Exemples: Find..., Save #1 #3 as \"Name\", Draft..., Analytics, Show shortlist \"Name\"")

if __name__ == "__main__":
    repl()
