import sqlite3
import hashlib

# ----------------- DATABASE -----------------
def init_db():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
    """)
    conn.commit()
    conn.close()

# ----------------- ADD USER -----------------
def add_user(username, password):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    hashed_pw = hashlib.sha256(password.encode()).hexdigest()
    try:
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_pw))
        conn.commit()
        print(f"User '{username}' added successfully.")
    except sqlite3.IntegrityError:
        print("Username already exists.")
    conn.close()

# ----------------- CHECK USER -----------------
def check_user(username, password):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    hashed_pw = hashlib.sha256(password.encode()).hexdigest()
    cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, hashed_pw))
    user = cursor.fetchone()
    conn.close()
    return user is not None

# ----------------- MAIN PROGRAM -----------------
if __name__ == "__main__":
    init_db()

    while True:
        action = input("Choose action (signup/login/exit): ").lower()

        if action == "signup":
            username = input("Enter username: ")
            password = input("Enter password: ")
            add_user(username, password)

        elif action == "login":
            username = input("Enter username: ")
            password = input("Enter password: ")

            if check_user(username, password):
                print("Login successful!")
            else:
                print("Invalid username or password.")

        elif action == "exit":
            print("Bye!")
            break
        else:
            print("Unknown command.")
