birthdays = {
    "Alice": "1995/06/15",
    "Bob": "1990/12/01",
    "Charlie": "2001/03/22",
    "Diana": "1988/11/05",
    "Ethan": "1993/09/17"
}

print("Welcome to the Birthday Look-up App!")
print("You can look up the birthdays of the people in the list!")

name = input("Enter the name of the person: ")

if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, I don’t have {name}'s birthday in the list.")
