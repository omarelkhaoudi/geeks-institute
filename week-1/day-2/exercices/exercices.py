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


