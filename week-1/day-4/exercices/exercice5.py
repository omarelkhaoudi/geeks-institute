from exercice4 import Family
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'].lower() == name.lower():
                if member['age'] >= 18:
                    print(f"{member['name']}'s power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old.")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("\n* Here is our powerful family *")
        super().family_presentation()

members_list = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", members_list)

incredibles_family.incredible_presentation()

incredibles_family.use_power("Michael")
incredibles_family.use_power("Sarah")

incredibles_family.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

incredibles_family.incredible_presentation()

try:
    incredibles_family.use_power("Jack")
except Exception as e:
    print(f"Error: {e}")