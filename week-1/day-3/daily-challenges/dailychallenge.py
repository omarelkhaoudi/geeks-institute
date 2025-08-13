# step1

# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {}  

#     def add_animal(self, animal_name, count=1):
#         if animal_name in self.animals:
#             self.animals[animal_name] += count
#         else:
#             self.animals[animal_name] = count
#         print(f"{count} {animal_name}(s) ajouté(s) à la ferme.")

#     def get_info(self):
#         print(f"{self.name}'s Farm")
#         print("-" * 20)
#         for animal, count in self.animals.items():
#             print(f"{animal} : {count}")
#         print("-" * 20)
#         print("E-I-E-I-O")  

#     def get_animal_types(self):
#         """Retourne la liste des animaux triés par ordre alphabétique"""
#         return sorted(self.animals.keys())

#     def get_short_info(self):
#         """Affiche une phrase courte avec tous les animaux de la ferme"""
#         animal_list = ", ".join(self.get_animal_types())
#         print(f"{self.name}'s farm has {animal_list}.")

# step2

# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name      
#         self.animals = {}          

# step3
# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {} 

#     def add_animal(self, animal_type, count=1):
#         if animal_type in self.animals:
#             self.animals[animal_type] += count
#         else:
#             self.animals[animal_type] = count

# step4

# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {}

#     def add_animal(self, animal_type, count=1):
#         if animal_type in self.animals:
#             self.animals[animal_type] += count
#         else:
#             self.animals[animal_type] = count

#     def get_info(self):
#         output = f"{self.name}'s Farm\n"
#         output += "-" * 30 + "\n"
#         for animal, count in self.animals.items():
#             output += f"{animal:<10} : {count:>3}\n"
#         output += "-" * 30 + "\n"
#         output += "E-I-E-I-O!\n"
#         return output

# step5

# my_farm = Farm("Old MacDonald's")

# my_farm.add_animal("cow", 5)
# my_farm.add_animal("sheep", 2)
# my_farm.add_animal("goat", 12)
# my_farm.add_animal("pig", 3)
# my_farm.add_animal("sheep", 1)  

# print(my_farm.get_info())

# step6

# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {}

#     def add_animal(self, animal_type, count=1):
#         if animal_type in self.animals:
#             self.animals[animal_type] += count
#         else:
#             self.animals[animal_type] = count

#     def get_info(self):
#         output = f"{self.name}'s Farm\n"
#         output += "-" * 30 + "\n"
#         for animal, count in self.animals.items():
#             output += f"{animal:<10} : {count:>3}\n"
#         output += "-" * 30 + "\n"
#         output += "E-I-E-I-O!\n"
#         return output

#     def get_animal_types(self):
#         """Retourne une liste triée des types d'animaux"""
#         return sorted(self.animals.keys())

# step7

# class Farm:
#     def __init__(self, farm_name):
#         self.name = farm_name
#         self.animals = {}

#     def add_animal(self, animal_type, count=1):
#         if animal_type in self.animals:
#             self.animals[animal_type] += count
#         else:
#             self.animals[animal_type] = count

#     def get_info(self):
#         output = f"{self.name}'s Farm\n"
#         output += "-" * 30 + "\n"
#         for animal, count in self.animals.items():
#             output += f"{animal:<10} : {count:>3}\n"
#         output += "-" * 30 + "\n"
#         output += "E-I-E-I-O!\n"
#         return output

#     def get_animal_types(self):
#         """Retourne une liste triée des types d'animaux"""
#         return sorted(self.animals.keys())

#     def get_short_info(self):
#         animal_list = []
#         for animal in self.get_animal_types():
#             count = self.animals[animal]
#             name = f"{animal}s" if count > 1 else animal
#             animal_list.append(name)

#         if len(animal_list) > 1:
#             sentence = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
#         else:
#             sentence = animal_list[0]
        
#         return f"{self.name}'s farm has {sentence}."





