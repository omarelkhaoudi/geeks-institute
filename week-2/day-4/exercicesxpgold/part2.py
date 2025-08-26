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
    command = input("\nEnter a command (login / exit): ").strip().lower()

    if command == "exit":
        print("Ending session...")
        break

    elif command == "login":
        if logged_in:
            print(f"You are already logged in as {logged_in}.")
            continue

        username = input("Username: ").strip()
        password = input("Password: ").strip()

        if username in users and users[username] == password:
            logged_in = username
            print("Welcome back!")
        else:
            print("Login failed. Please try again.")
            if username not in users:
                signup_choice = input
                ("Unknown username. Would you like to sign up? (yes/no): ").strip().lower()
                if signup_choice == "yes":
                    while True:
                        new_username = input("Enter a new username: ").strip()
                        if new_username in users:
                            print("Username already exists. Please choose another.")
                        else:
                            break
                    new_password = input("Enter a password: ").strip()
                    users[new_username] = new_password
                    print(f"User '{new_username}' successfully created! You can now login.")
    else:
        print("Unknown command. Please type 'login' or 'exit'.")
