def display_board(board):
    """Display the current state of the board"""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

def player_input(player, board):
    """Ask the player for a valid move and return the position"""
    while True:
        try:
            position = int(input(f"Player {player} (choose 1-9): ")) - 1
            if position < 0 or position > 8:
                print("Invalid position. Choose a number between 1 and 9.")
            elif board[position] != " ":
                print("That position is already taken. Try again.")
            else:
                return position
        except ValueError:
            print("Invalid input. Enter a number between 1 and 9.")

def check_win(board, mark):
    """Check if the player with 'mark' has won"""
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]              
    ]
    for condition in win_conditions:
        if all(board[i] == mark for i in condition):
            return True
    return False

def check_tie(board):
    """Check if the board is full and it's a tie"""
    return all(space != " " for space in board)

def play():
    """Main function to run the game"""
    board = [" "] * 9
    current_player = "X"
    display_board(board)
    
    while True:
        position = player_input(current_player, board)
        board[position] = current_player
        display_board(board)
        
        if check_win(board, current_player):
            print(f"Player {current_player} wins!")
            break
        elif check_tie(board):
            print("It's a tie!")
            break
        
        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    play()
