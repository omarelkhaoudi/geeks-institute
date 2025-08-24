#1-1)
from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n===== Restaurant Menu Manager =====")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(E) Exit")

        choice = input("Choose an option: ").strip().upper()

        if choice == "V":
            name = input("Enter the item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Found: {item.name} - {item.price}")
            else:
                print("Item not found.")

        elif choice == "A":
            add_item_to_menu()

        elif choice == "D":
            remove_item_from_menu()

        elif choice == "U":
            update_item_from_menu()

        elif choice == "S":
            show_restaurant_menu()

        elif choice == "E":
            print("\nExiting program...")
            show_restaurant_menu()
            break

        else:
            print("Invalid option, please try again.")

#1-2)
def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    price = int(input("Enter the price of the new item: "))
    item = MenuItem(name, price)

    try:
        item.save()
        print(f"{name} was added successfully.")
    except Exception as e:
        print("Error adding item:", e)

#1-3)
def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ")
    item = MenuItem(name, 0)

    try:
        item.delete()
        print(f"{name} was deleted successfully.")
    except Exception as e:
        print("Error deleting item:", e)

#1-4)
def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    old_price = int(input("Enter the current price of the item: "))
    new_name = input("Enter the new name: ")
    new_price = int(input("Enter the new price: "))

    item = MenuItem(old_name, old_price)

    try:
        item.update(new_name, new_price)
        print(f"{old_name} was updated successfully to {new_name} - {new_price}.")
    except Exception as e:
        print("Error updating item:", e)

#1-5)
def show_restaurant_menu():
    print("\n===== Restaurant Menu =====")
    items = MenuManager.all_items()
    if not items:
        print("The menu is empty.")
    else:
        for i in items:
            print(f"- {i.name} : {i.price}")

#2)
if __name__ == "__main__":
    show_user_menu()

