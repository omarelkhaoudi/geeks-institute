from menu_item import MenuItem
from menu_manager import MenuManager

item = MenuItem('Burger', 35)
item.save()

item.update('Veggie Burger', 37)

item.delete()

item2 = MenuManager.get_by_name('Beef Stew')
print(item2.name, item2.price) if item2 else print("Item not found")

items = MenuManager.all_items()
for i in items:
    print(i.name, i.price)
