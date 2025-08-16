import random

class Game:
    def get_user_item(self):
        """Ask the user for 'rock', 'paper', or 'scissors' until valid."""
        valid_items = ["rock", "paper", "scissors"]
        user_choice = None

        while user_choice not in valid_items:
            user_choice = input("Select (rock/paper/scissors): ").strip().lower()
            if user_choice not in valid_items:
                print("Invalid choice. Please try again.")
        
        return user_choice

    def get_computer_item(self):
        """Randomly choose rock, paper, or scissors for the computer."""
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        """Return 'win', 'loss', or 'draw'."""
        if user_item == computer_item:
            return "draw"
        elif (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"
        else:
            return "loss"

    def play(self):
        """Play one round of the game."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}.")
        if result == "win":
            print("You win!")
        elif result == "loss":
            print("You lose!")
        else:
            print("It's a draw!")

        return result
