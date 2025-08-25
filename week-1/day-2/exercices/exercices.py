# exercice1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# result = dict(zip(keys,values))
# print(result)

# exercice2 (1ère méthode)
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total = 0

# for nom, age in family.items():
#     if age < 3:
#         prix = 0
#     elif age <= 12:
#         prix = 10
#     else:
#         prix = 15
    
#     print(f"{nom} doit payer {prix} $")
#     total += prix
# print(f"Coût total pour la famille : {total} $")

# exercice3
# brand = {
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000,
#     "major_color": {
#         "France": "blue",
#         "Spain": "red",
#         "US": ["pink", "green"]
#     }
# }
# brand["number_stores"] = 2
# print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")
# brand["country_creation"] = "Spain"
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
# del brand["creation_date"]
# print("Last international competitor:", brand["international_competitors"][-1])
# print("Major clothes colors in the US:", brand["major_color"]["US"])
# print("Number of key-value pairs:", len(brand))
# print("Keys of the dictionary:", list(brand.keys()))
# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000
# }
# brand.update(more_on_zara)
# print("Number of stores after update:", brand["number_stores"])

# exercice4

# def describe_city(city, country="Portugal"):
#     print(f"{city} is in {country}.")

# describe_city("Porto")                 
# describe_city("Reykjavik", "Iceland")       
# describe_city("Rabat", "Morocco")

# exercice5

# import random

# def compare_numbers():

#     user_number = int(input("Enter a number between 1 and 100: "))

#     random_number = random.randint(1, 100)

#     if user_number == random_number:
#         print(f"Success! You guessed the number {random_number} correctly!")
#     else:
#         print(f"Fail! Your number: {user_number}, Random number: {random_number}")

# compare_numbers()

# exercice6

# def make_shirt(size="Large", message="Python is awesome"):
#     print(f"The size of the shirt is {size} and the text is '{message}'.")

# make_shirt()
# make_shirt(size="Medium")
# make_shirt(size="Small", message="Stay curious")
# make_shirt(message="Eat, Sleep, Code, Repeat", size="XL")

# exercice7

# import random

# def get_random_temp(season):
#     if season == "winter":
#         low, high = -10, 16
#     elif season == "spring":
#         low, high = 5, 23
#     elif season == "summer":
#         low, high = 16, 40
#     elif season in ["autumn", "fall"]:
#         low, high = 5, 24
#     else:
#         low, high = -10, 40
#     return round(random.uniform(low, high), 1)

# def determine_season_by_month(month):
#     if month in [12, 1, 2]:
#         return "winter"
#     elif month in [3, 4, 5]:
#         return "spring"
#     elif month in [6, 7, 8]:
#         return "summer"
#     elif month in [9, 10, 11]:
#         return "autumn"
#     else:
#         return None

# def main():
#     try:
#         month = int(input("Enter the month number (1-12): "))
#         if not 1 <= month <= 12:
#             print("Invalid month number.")
#             return
#     except ValueError:
#         print("Please enter a valid number.")
#         return
    
#     season = determine_season_by_month(month)
#     temp = get_random_temp(season)

#     print(f"The temperature right now is {temp} degrees Celsius.")
    
#     if temp < 0:
#         print("Oh là là, glacial ! Mets-toi bien au chaud.")
#     elif 0 <= temp <= 16:
#         print("Il fait frais, une petite veste sera parfaite.")
#     elif 16 < temp <= 23:
#         print("Temps agréable, profite-en bien.")
#     elif 24 <= temp <= 32:
#         print("Chaud et ensoleillé, pense à boire de l’eau.")
#     else:  
#         print("Canicule en vue ! Reste à l’ombre et hydrate-toi souvent.")

# if __name__ == "__main__":
#     main()

# exercice8

# data = [
#     {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
#     {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
#     {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
#     {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
#     {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
#     {"question": "What species is Chewbacca?", "answer": "Wookiee"}
# ]

# def ask_questions():
#     correct = 0
#     incorrect = 0
#     wrong_answers = []

#     for item in data:
#         user_answer = input(item["question"] + " ").strip()
#         if user_answer.lower() == item["answer"].lower():
#             correct += 1
#         else:
#             incorrect += 1
#             wrong_answers.append({
#                 "question": item["question"],
#                 "your_answer": user_answer,
#                 "correct_answer": item["answer"]
#             })
#     return correct, incorrect, wrong_answers

# def show_results(correct, incorrect, wrong_answers):
#     print(f"\nYou got {correct} correct and {incorrect} incorrect answers.")

#     if wrong_answers:
#         print("\nReview your wrong answers:")
#         for wrong in wrong_answers:
#             print(f"- Question: {wrong['question']}")
#             print(f"  Your answer: {wrong['your_answer']}")
#             print(f"  Correct answer: {wrong['correct_answer']}\n")

#     if incorrect > 3:
#         play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ").strip().lower()
#         if play_again == "yes":
#             print("\nStarting the quiz again...\n")
#             main()
#         else:
#             print("Thanks for playing!")

# def main():
#     correct, incorrect, wrong_answers = ask_questions()
#     show_results(correct, incorrect, wrong_answers)

# if __name__ == "__main__":
#     main()






