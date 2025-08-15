# exercice3 # file1 # dog.py

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} won the fight!"
        elif self_power < other_power:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"

# file2 # petdog.py

import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} barks loudly!"

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        all_dogs = ", ".join(dog_names)
        print(f"{all_dogs} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and refuses to do a trick.")

if __name__ == "__main__":
    dog1 = PetDog("Rex", 5, 20)
    dog2 = PetDog("Max", 4, 18)
    dog3 = PetDog("Buddy", 6, 25)

    dog1.train()  
    dog1.play(dog2.name, dog3.name)  
    dog1.do_a_trick()  
    dog2.do_a_trick()