# exercice1
# month = int(input("Enter a month number (1-12): "))

# if month in [3, 4, 5]:
#     season = "Spring"
# elif month in [6, 7, 8]:
#     season = "Summer"
# elif month in [9, 10, 11]:
#     season = "Autumn"
# elif month in [12, 1, 2]:
#     season = "Winter"
# else:
#     season = None

# if season:
#     print(f"The season is {season}.")
# else:
#     print("Invalid month number. Please enter a number between 1 and 12.")

# exercice 2
# for num in range(1, 21):
#     print(num)

# print()
# numbers = list(range(1, 21))
# for i in range(len(numbers)):
#     if i % 2 == 0:  
#         print(numbers[i])

# exercice3
# my_name = "YourName"

# while True:
#     name = input("Enter your name: ")
#     if name == my_name:
#         print("Welcome!")
#         break

# exercice4
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# user_name = input("Enter your name: ")

# if user_name in names:
#     index = names.index(user_name)
#     print(f"{user_name} found at index {index}")
# else:
#     print(f"{user_name} not found in the list.")

# exercice5
# num1 = float(input("Input the 1st number: "))
# num2 = float(input("Input the 2nd number: "))
# num3 = float(input("Input the 3rd number: "))

# greatest = max(num1, num2, num3)

# print(f"The greatest number is: {greatest}")

# exercice6
# import random
# wins = 0
# losses = 0

# while True:
#     user_input = input("Guess a number from 1 to 9 (or type 'q' to quit): ")

#     if user_input.lower() == 'q':
#         break

#     if not user_input.isdigit():
#         print("Please enter a valid number.")
#         continue

#     guess = int(user_input)
#     if guess < 1 or guess > 9:
#         print("Number must be between 1 and 9.")
#         continue

#     random_number = random.randint(1, 9)
#     print(f"The random number was: {random_number}")

#     if guess == random_number:
#         print("Winner!")
#         wins += 1
#     else:
#         print("Better luck next time.")
#         losses += 1

# print(f"\nGames won: {wins}")
# print(f"Games lost: {losses}")







