birthdays = {
    "Alice": "1995/06/15",
    "Bob": "1990/12/01",
    "Charlie": "2001/03/22",
    "Diana": "1988/11/05",
    "Ethan": "1993/09/17"
}

print("Welcome to the Birthday Look-up App!")
print("You can look up the birthdays of the people in the list!")

print("\nHere are the names you can look up:")
for name in birthdays:
    print("-", name)

user_input = input("\nEnter the name of the person: ")

if user_input in birthdays:
    print(f"{user_input}'s birthday is on {birthdays[user_input]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {user_input}.")
