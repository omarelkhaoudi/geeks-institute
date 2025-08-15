# exercice4

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new member')}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'].lower() == name.lower():
                return member['age'] >= 18
        print(f"No member named {name} found.")
        return False

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")


members_list = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Johnson", members_list)

my_family.family_presentation()
print("\nIs Michael over 18?", my_family.is_18("Michael"))
print("Is Sarah over 18?", my_family.is_18("Sarah"))

my_family.born(name="Emma", age=0, gender="Female", is_child=True)

print()
my_family.family_presentation()