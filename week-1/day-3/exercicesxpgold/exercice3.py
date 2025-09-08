# -- Restaurant-Menu-Manager -- #

class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    # Method to add a new dish
    def add_item(self, name, price, spice, gluten):
        self.menu.append({"name": name, "price": price, "spice": spice, "gluten": gluten})
        print(f"{name} has been added to the menu.")

    # Method to update an existing dish
    def update_item(self, name, price=None, spice=None, gluten=None):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                if price is not None:
                    dish["price"] = price
                if spice is not None:
                    dish["spice"] = spice
                if gluten is not None:
                    dish["gluten"] = gluten
                print(f"{name} has been updated: {dish}")
                return
        print(f"{name} is not in the menu.")

    # Method to remove a dish
    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"{name} has been removed. Updated menu:")
                print(self.menu)
                return
        print(f"{name} is not in the menu.")

# --- Example Usage ---
if __name__ == "__main__":
    manager = MenuManager()

    # Add a dish
    manager.add_item("Pasta", 20, "A", True)

    # Update a dish
    manager.update_item("Salad", price=20, spice="B")

    # Remove a dish
    manager.remove_item("French Fries")
