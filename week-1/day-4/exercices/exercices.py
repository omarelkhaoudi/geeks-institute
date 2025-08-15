# exercice1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# cat1 = Bengal("Leo", 3)
# cat2 = Chartreux("Milo", 5)
# cat3 = Siamese("Luna", 2)

# all_cats = [cat1, cat2, cat3]

# sara_pets = Pets(all_cats)

# sara_pets.walk()

# exercice2

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} is barking"

#     def run_speed(self):
#         return (self.weight / self.age) * 10

#     def fight(self, other_dog):
#         self_power = self.run_speed() * self.weight
#         other_power = other_dog.run_speed() * other_dog.weight

#         if self_power > other_power:
#             return f"{self.name} won the fight!"
#         elif self_power < other_power:
#             return f"{other_dog.name} won the fight!"
#         else:
#             return "It's a tie!"
        
# exercice3 # file1 # dog.py

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} is barking"

#     def run_speed(self):
#         return (self.weight / self.age) * 10

#     def fight(self, other_dog):
#         self_power = self.run_speed() * self.weight
#         other_power = other_dog.run_speed() * other_dog.weight

#         if self_power > other_power:
#             return f"{self.name} won the fight!"
#         elif self_power < other_power:
#             return f"{other_dog.name} won the fight!"
#         else:
#             return "It's a tie!"

# file2 # petdog.py

# import random

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} barks loudly!"

# class PetDog(Dog):
#     def __init__(self, name, age, weight, trained=False):
#         super().__init__(name, age, weight)
#         self.trained = trained

#     def train(self):
#         print(self.bark())
#         self.trained = True

#     def play(self, *dog_names):
#         all_dogs = ", ".join(dog_names)
#         print(f"{all_dogs} all play together")

#     def do_a_trick(self):
#         if self.trained:
#             tricks = [
#                 f"{self.name} does a barrel roll",
#                 f"{self.name} stands on his back legs",
#                 f"{self.name} shakes your hand",
#                 f"{self.name} plays dead"
#             ]
#             print(random.choice(tricks))
#         else:
#             print(f"{self.name} is not trained yet and refuses to do a trick.")

# if __name__ == "__main__":
#     dog1 = PetDog("Rex", 5, 20)
#     dog2 = PetDog("Max", 4, 18)
#     dog3 = PetDog("Buddy", 6, 25)

#     dog1.train()  
#     dog1.play(dog2.name, dog3.name)  
#     dog1.do_a_trick()  
#     dog2.do_a_trick()  

# exercice4

# class Family:
#     def __init__(self, last_name, members):
#         self.last_name = last_name
#         self.members = members

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new member')}!")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'].lower() == name.lower():
#                 return member['age'] >= 18
#         print(f"No member named {name} found.")
#         return False

#     def family_presentation(self):
#         print(f"Family: {self.last_name}")
#         for member in self.members:
#             print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")


# members_list = [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ]

# my_family = Family("Johnson", members_list)

# my_family.family_presentation()
# print("\nIs Michael over 18?", my_family.is_18("Michael"))
# print("Is Sarah over 18?", my_family.is_18("Sarah"))

# my_family.born(name="Emma", age=0, gender="Female", is_child=True)

# print()
# my_family.family_presentation()

# exercice5

# class Family:
#     def __init__(self, last_name, members):
#         self.last_name = last_name
#         self.members = membersm

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new member')}!")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'].lower() == name.lower():
#                 return member['age'] >= 18
#         print(f"No member named {name} found.")
#         return False

#     def family_presentation(self):
#         print(f"Family: {self.last_name}")
#         for member in self.members:
#             print(", ".join([f"{key.capitalize()}: {value}" for key, value in member.items()]))

# class TheIncredibles(Family):
#     def use_power(self, name):
#         for member in self.members:
#             if member['name'].lower() == name.lower():
#                 if member['age'] >= 18:
#                     print(f"{member['name']}'s power: {member['power']}")
#                 else:
#                     raise Exception(f"{member['name']} is not over 18 years old.")
#                 return
#         print(f"No member named {name} found.")

#     def incredible_presentation(self):
#         print("\n* Here is our powerful family *")
#         super().family_presentation()

# members_list = [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
# ]

# incredibles_family = TheIncredibles("Incredibles", members_list)

# incredibles_family.incredible_presentation()

# incredibles_family.use_power("Michael")
# incredibles_family.use_power("Sarah")

# incredibles_family.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

# incredibles_family.incredible_presentation()

# try:
#     incredibles_family.use_power("Jack")
# except Exception as e:
#     print(f"Error: {e}")








