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

class Dog:
    def __init__(self,name,height):
        self.name = name 
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

davids_dog = Dog("Rex",50)

print(f"name: {davids_dog.name}, height: {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup",20)

print(f"name: {sarahs_dog.name}, height: {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()


