# # exercice1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# cat1 = Cat("Minou", 2)
# cat2 = Cat("Mimi", 3)
# cat3 = Cat("Tigrou", 4)
# def get_oldest_cat(*cats):
#     oldest = cats[0]
#     for cat in cats:
#         if cat.age > oldest.age:
#             oldest = cat
#     return oldest
# oldest_cat = get_oldest_cat(cat1, cat2, cat3)
# print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# exercice2

# class Dog:
#     def __init__(self,name,height):
#         self.name = name 
#         self.height = height
    
#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height*2} cm high!")

# davids_dog = Dog("Rex",50)

# print(f"name: {davids_dog.name}, height: {davids_dog.height}")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup",20)

# print(f"name: {sarahs_dog.name}, height: {sarahs_dog.height}")
# sarahs_dog.bark()
# sarahs_dog.jump()

# exercice3

# class Song:
#     def __init__(self,lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(f"{i}")
# stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

# exercice4

# class Zoo:
#     def __init__(self,zoo_name):
#         self.name = zoo_name
#         self.animals = []
        
#     def add_animal(self,new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#             print(f"{new_animal} has been added to the zoo.")
#         else:
#             print(f"{new_animal} is already in the zoo.")

#     def get_animals(self):
#         print(f"Animals in {self.name}:")
#         for animal in self.animals:
#             print(f"- {animal}")
    
#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             print(f"{animal_sold} has been sold.")
#         else:
#             print(f"{animal_sold} not found in the zoo.")

#     def sort_animals(self):
#         sorted_animals = sorted(self.animals)
#         grouped_animals = {}
#         for animal in sorted_animals:
#             first_letter = animal[0].upper()
#             if first_letter not in grouped_animals:
#                 grouped_animals[first_letter] = []
#             grouped_animals[first_letter].append(animal)
        
#         for letter in grouped_animals:
#             if len(grouped_animals[letter]) == 1:
#                 grouped_animals[letter] = grouped_animals[letter][0]
        
#         self.grouped_animals = grouped_animals
#         return grouped_animals
    
#     def get_groups(self):
#         if hasattr(self, 'grouped_animals'):
#             print("Animal groups:")
#             for letter, animals in self.grouped_animals.items():
#                 print(f"{letter}: {animals}")
#         else:
#             print("No groups found. Please sort animals first.")

# new_york_zoo = Zoo("New York Zoo")

# new_york_zoo.add_animal("Giraffe")
# new_york_zoo.add_animal("Ape")
# new_york_zoo.add_animal("Baboon")
# new_york_zoo.add_animal("Bear")
# new_york_zoo.add_animal("Cat")
# new_york_zoo.add_animal("Cougar")
# new_york_zoo.add_animal("Eel")
# new_york_zoo.add_animal("Emu")

# new_york_zoo.get_animals()

# new_york_zoo.sell_animal("Cougar")

# groups = new_york_zoo.sort_animals()
# print("\nSorted and grouped animals:", groups)

# new_york_zoo.get_groups()




