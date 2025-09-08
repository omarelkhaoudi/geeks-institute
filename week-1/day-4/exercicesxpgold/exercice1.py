class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("Authentication successful.")
        else:
            raise Exception("Authentication failed.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("You must log in first.")
        if amount <= 0:
            raise Exception("Deposit must be positive.")
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must log in first.")
        if amount <= 0:
            raise Exception("Withdrawal must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


# Part II: Minimum balance account
class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must log in first.")
        if amount <= 0:
            raise Exception("Withdrawal must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot go below minimum balance.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


# Part IV: ATM class
class ATM:
    def __init__(self, account_list, try_limit=2):
        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("account_list must be a list of BankAccount objects.")

        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Defaulting to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- MAIN MENU ---")
            print("1. Log in")
            print("2. Exit")

            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid choice. Try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                self.show_account_menu(account)
                return
            except:
                continue

        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("Too many failed attempts. Shutting down.")
            exit()
        else:
            print(f"Login failed. Attempts left: {self.try_limit - self.current_tries}")

    def show_account_menu(self, account):
        while True:
            print(f"\n--- ACCOUNT MENU ({account.username}) ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")

            choice = input("Choose an option: ")

            try:
                if choice == "1":
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                elif choice == "2":
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                elif choice == "3":
                    print("Logging out...")
                    break
                else:
                    print("Invalid choice. Try again.")
            except Exception as e:
                print(e)


# -----------------
# Example usage:
# -----------------
if __name__ == "__main__":
    acc1 = BankAccount("omar", "1234", 1000)
    acc2 = MinimumBalanceAccount("ali", "5678", 500, minimum_balance=100)

    atm = ATM([acc1, acc2], try_limit=3)
