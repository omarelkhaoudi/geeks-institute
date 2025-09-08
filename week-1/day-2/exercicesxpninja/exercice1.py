car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

car_list = [car.strip() for car in car_string.split(",")]

print(f"There are {len(car_list)} manufacturers in the list.")

print("Manufacturers in descending order (Z-A):")
print(sorted(car_list, reverse=True))

count_o = sum(1 for car in car_list if 'o' in car.lower())
print(f"Number of manufacturers with the letter 'o': {count_o}")

count_no_i = sum(1 for car in car_list if 'i' not in car.lower())
print(f"Number of manufacturers without the letter 'i': {count_no_i}")

car_list_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_cars = list(dict.fromkeys(car_list_with_duplicates))  

print("Companies without duplicates:")
print(", ".join(unique_cars))
print(f"Number of companies now: {len(unique_cars)}")

# --- Bonus --- #
reversed_names_sorted = [car[::-1] for car in sorted(unique_cars)]
print("Manufacturers in A-Z order with letters reversed:")
print(reversed_names_sorted)
