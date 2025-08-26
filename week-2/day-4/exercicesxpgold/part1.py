#1)
users = {
    "admin": "admin123",
    "john": "qwerty",
    "sarah": "letmein"
}

#2)
logged_in = None

#3)
while True:
    command = input("Enter a command (login / exit): ").strip().lower()

    if command == "exit":
        print("Exiting program...")
        break 

    elif command == "login":
        if logged_in:
            print(f"You are already logged in as {logged_in}.")
            continue 

        username = input("Username: ").strip()
        password = input("Password: ").strip()


        if username in users and users[username] == password:
            logged_in = username
            print("You are now logged in.")
        else:
            print("Invalid username or password.")

    else:
        print("Unknown command. Please type 'login' or 'exit'.")


