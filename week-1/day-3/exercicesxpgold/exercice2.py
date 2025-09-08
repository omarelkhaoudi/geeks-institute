# -- Custom List Class -- #

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return self.letters[::-1]

    def sorted_list(self):
        return sorted(self.letters)

    def random_number_list(self, min_val=0, max_val=100):
        return [random.randint(min_val, max_val) for _ in range(len(self.letters))]

# -- Example Usage -- #
mylist = MyList(['d', 'a', 'c', 'b', 'e'])

print("Original list:", mylist.letters)
print("Reversed list:", mylist.reversed_list())
print("Sorted list:", mylist.sorted_list())
print("Random number list:", mylist.random_number_list())
