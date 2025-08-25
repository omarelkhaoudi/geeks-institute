from game import Game

def get_user_menu_choice():
    """Display the menu and get user's choice."""
    print("\nMenu:")
    print("(g) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")
    
    choice = input("Enter your choice: ").strip().lower()
    while choice not in ["g", "s", "q"]:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice: ").strip().lower()
    
    return choice

def print_results(results):
    """Display the final scores."""
    print("\nGame Results:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("\nThanks for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "s":
            print_results(results)

        elif choice == "q":
            print_results(results)
            break

if __name__ == "__main__":
    main()
