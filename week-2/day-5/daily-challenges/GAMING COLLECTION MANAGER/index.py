from flask import Flask, request, jsonify, render_template, redirect, url_for, flash
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
app.secret_key = "supersecretkey"

# Database connection
DB_URI = "postgresql://neondb_owner:npg_GMasRIN5rCP0@ep-winter-wave-adaluruz-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require"

def get_connection():
    return psycopg2.connect(DB_URI, cursor_factory=RealDictCursor)

# ==========================================
# ROUTES - GAMES
# ==========================================
@app.route("/", methods=["GET"])
def show_games():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    # Pagination
    page = request.args.get("page", 1, type=int)
    per_page = 6
    offset = (page - 1) * per_page

    # Total des jeux
    cur.execute("SELECT COUNT(*) FROM games")
    total_games = cur.fetchone()["count"]
    total_pages = (total_games + per_page - 1) // per_page  # arrondi supérieur

    # Récupérer les jeux avec développeur
    cur.execute("""
        SELECT g.*, d.name AS developer
        FROM games g
        LEFT JOIN developers d ON g.developer_id = d.id
        ORDER BY g.id DESC
        LIMIT %s OFFSET %s
    """, (per_page, offset))
    games = cur.fetchall()

    # Ajouter les plateformes pour chaque jeu
    for game in games:
        cur.execute("""
            SELECT p.name
            FROM platforms p
            JOIN game_platforms gp ON p.id = gp.platform_id
            WHERE gp.game_id = %s
        """, (game['id'],))
        game['platforms'] = [p['name'] for p in cur.fetchall()]

    cur.close()
    conn.close()
    return render_template("index.html", data=games, page=page, total_pages=total_pages)



@app.route("/create", methods=["GET", "POST"])
def create_game():
    conn = get_connection()
    cur = conn.cursor()
    
    # Récupérer les développeurs
    cur.execute("SELECT id, name FROM developers ORDER BY name")
    developers = cur.fetchall()

    # Récupérer les plateformes
    cur.execute("SELECT id, name FROM platforms ORDER BY name")
    platforms = cur.fetchall()
    
    if request.method == "POST":
        title = request.form["title"]
        genre = request.form["genre"]
        release_year = request.form["release_year"]
        description = request.form["description"]
        rating = request.form["rating"]
        metacritic_score = request.form["metacritic_score"]
        tags = request.form["tags"]
        image_url = request.form["image_url"]
        developer_id = request.form["developer_id"]
        platform_ids = request.form.getlist("platforms")  # récupère plusieurs plateformes

        # Insérer le jeu dans la table games
        cur.execute(
            """
            INSERT INTO games (title, genre, release_year, description, rating, metacritic_score, tags, image_url, developer_id)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
            RETURNING id
            """,
            (title, genre, release_year, description, rating, metacritic_score, tags, image_url, developer_id)
        )
        game_id = cur.fetchone()[0]

        # Insérer les relations Many-to-Many dans game_platforms
        for pid in platform_ids:
            cur.execute(
                "INSERT INTO game_platforms (game_id, platform_id) VALUES (%s, %s)",
                (game_id, pid)
            )

        conn.commit()
        flash(f'Game "{title}" created successfully!', 'success')
        cur.close()
        conn.close()
        return redirect(url_for("show_games"))

    cur.close()
    conn.close()
    return render_template("create.html", developers=developers, platforms=platforms)



@app.route("/edit/<int:game_id>", methods=["GET", "POST"])
def edit_game(game_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    # récupérer tous les développeurs pour le select
    cur.execute("SELECT id, name FROM developers ORDER BY name")
    developers = cur.fetchall()

    if request.method == "POST":
        # Récupérer les données du formulaire
        title = request.form["title"]
        genre = request.form["genre"]
        release_year = request.form["release_year"]
        description = request.form["description"]
        rating = request.form["rating"]
        developer_id = request.form["developer_id"]

        # Mettre à jour le jeu
        cur.execute(
            """
            UPDATE games
            SET title=%s, genre=%s, release_year=%s, description=%s, rating=%s, developer_id=%s
            WHERE id=%s
            """,
            (title, genre, release_year, description, rating, developer_id, game_id)
        )
        conn.commit()

        # Mettre à jour les plateformes associées
        platform_ids = request.form.getlist('platforms')
        cur.execute("DELETE FROM game_platforms WHERE game_id=%s", (game_id,))
        for pid in platform_ids:
            cur.execute(
                "INSERT INTO game_platforms (game_id, platform_id) VALUES (%s, %s)",
                (game_id, pid)
            )
        conn.commit()

        flash(f'Game "{title}" updated successfully!', 'success')
        cur.close()
        conn.close()
        return redirect(url_for("show_games"))

    # -------------------
    # Partie GET : récupérer les infos pour pré-remplir le formulaire
    # -------------------
    cur.execute("SELECT * FROM games WHERE id=%s", (game_id,))
    game = cur.fetchone()

    cur.execute("SELECT id, name FROM platforms ORDER BY name")
    platforms = cur.fetchall()

    cur.execute("SELECT platform_id FROM game_platforms WHERE game_id=%s", (game_id,))
    game_platform_ids = [p['platform_id'] for p in cur.fetchall()]

    return render_template(
        "edit_game.html",
        game=game,
        developers=developers,
        platforms=platforms,
        game_platform_ids=game_platform_ids
    )




@app.route("/delete/<int:game_id>", methods=["POST"])
def delete_game(game_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM games WHERE id=%s", (game_id,))
    conn.commit()
    cur.close()
    conn.close()
    flash("Game deleted successfully!", "success")
    return redirect(url_for("show_games"))

# ==========================================
# ROUTES - REVIEWS
# ==========================================
@app.route("/reviews", methods=["POST"])
def create_review():
    data = request.json
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        """
        INSERT INTO reviews (rating, comment, game_id, user_id)
        VALUES (%s,%s,%s,%s) RETURNING id
        """,
        (data["rating"], data.get("comment"), data["game_id"], data["user_id"])
    )
    review_id = cur.fetchone()["id"]
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message":"Review created","id":review_id}),201

@app.route("/reviews", methods=["GET"])
def get_reviews():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT r.id, r.rating, r.comment, r.created_at,
               g.title AS game, u.username AS user
        FROM reviews r
        LEFT JOIN games g ON r.game_id=g.id
        LEFT JOIN users u ON r.user_id=u.id
    """)
    reviews = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(reviews)

# ==========================================
# SEARCH
# ==========================================
@app.route("/search", methods=["GET"])
def search_games():
    query = request.args.get("query", "")
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        """
        SELECT * FROM games
        WHERE title ILIKE %s
        """,
        (f"%{query}%",)
    )
    games = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("index.html", data=games)

@app.route("/developers")
def developers():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT id, name, country, logo_url FROM developers")
    developers = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("developers.html", developers=developers)



@app.route("/dashboard")
def dashboard():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    # Total games
    cur.execute("SELECT COUNT(*) AS total_games FROM games")
    total_games = cur.fetchone()['total_games']

    # Total reviews
    cur.execute("SELECT COUNT(*) AS total_reviews FROM reviews")
    total_reviews = cur.fetchone()['total_reviews']

    # Average rating
    cur.execute("SELECT ROUND(AVG(rating),2) AS avg_rating FROM games")
    avg_rating = cur.fetchone()['avg_rating'] or 0

    # Games by genre
    cur.execute("SELECT genre, COUNT(*) AS count FROM games GROUP BY genre ORDER BY count DESC")
    games_by_genre = cur.fetchall()  # list of dicts

    cur.close()
    conn.close()

    return render_template(
        "dashboard.html",
        total_games=total_games,
        total_reviews=total_reviews,
        avg_rating=avg_rating,
        games_by_genre=games_by_genre
    )

# ==========================================
# RUN SERVER
# ==========================================
if __name__ == "__main__":
    app.run(debug=True)
