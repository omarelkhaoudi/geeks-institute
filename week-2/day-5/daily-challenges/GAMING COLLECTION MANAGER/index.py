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
    cur = conn.cursor()
    cur.execute("SELECT * FROM games")
    games = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("index.html", data=games)

@app.route("/create", methods=["GET", "POST"])
def create_game():
    if request.method == "POST":
        title = request.form["title"]
        genre = request.form["genre"]
        release_year = request.form["release_year"]
        description = request.form["description"]
        rating = request.form["rating"]
        metacritic_score = request.form["metacritic_score"]
        tags = request.form["tags"]
        image_url = request.form["image_url"]

        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            """
            INSERT INTO games (title, genre, release_year, description, rating, metacritic_score, tags, image_url)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
            """,
            (title, genre, release_year, description, rating, metacritic_score, tags, image_url)
        )
        conn.commit()
        cur.close()
        conn.close()
        flash(f'Game "{title}" created successfully!', 'success')
        return redirect(url_for("show_games"))

    return render_template("create.html")

@app.route("/edit/<int:game_id>", methods=["GET", "POST"])
def edit_game(game_id):
    conn = get_connection()
    cur = conn.cursor()

    if request.method == "POST":
        title = request.form["title"]
        genre = request.form["genre"]
        release_year = request.form["release_year"]
        description = request.form["description"]
        rating = request.form["rating"]

        cur.execute(
            """
            UPDATE games SET title=%s, genre=%s, release_year=%s, description=%s, rating=%s
            WHERE id=%s
            """,
            (title, genre, release_year, description, rating, game_id)
        )
        conn.commit()
        flash(f'Game "{title}" updated successfully!', 'success')
        cur.close()
        conn.close()
        return redirect(url_for("show_games"))

    # GET request
    cur.execute("SELECT * FROM games WHERE id=%s", (game_id,))
    game = cur.fetchone()
    cur.close()
    conn.close()
    if not game:
        flash("Game not found.", "error")
        return redirect(url_for("show_games"))

    return render_template("edit_game.html", game=game)

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
@app.route("/dashboard")
def dashboard():
    conn = get_connection()
    cur = conn.cursor()

    try:
        # عدد الألعاب
        cur.execute("SELECT COUNT(*) AS total_games FROM games")
        total_games = cur.fetchone()['total_games']

        # عدد المراجعات
        cur.execute("SELECT COUNT(*) AS total_reviews FROM reviews")
        total_reviews = cur.fetchone()['total_reviews']

        # متوسط تقييم الألعاب
        cur.execute("SELECT AVG(rating) AS avg_rating FROM games")
        avg_rating = cur.fetchone()['avg_rating'] or 0

        # عدد الألعاب حسب النوع
        cur.execute("SELECT genre, COUNT(*) AS count FROM games GROUP BY genre")
        games_by_genre = cur.fetchall()  # list of dicts: [{'genre': 'Action', 'count': 5}, ...]

        return render_template("dashboard.html",
                               total_games=total_games,
                               total_reviews=total_reviews,
                               avg_rating=round(avg_rating, 2),
                               games_by_genre=games_by_genre)
    except Exception as e:
        flash(f"Error fetching dashboard data: {str(e)}", "error")
        return redirect(url_for("show_games"))
    finally:
        cur.close()
        conn.close()

# ==========================================
# RUN SERVER
# ==========================================
if __name__ == "__main__":
    app.run(debug=True)
