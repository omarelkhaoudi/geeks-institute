from db_config import connect

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def save(self):
        conn = connect()
        cur = conn.cursor()
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        cur.execute(query, (self.name, self.price))
        conn.commit()
        cur.close()
        conn.close()
        print(f"{self.name} added successfully!")
    
    def delete(self):
        conn = connect()
        cur = conn.cursor()
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cur.execute(query, (self.name,))
        conn.commit()
        cur.close()
        conn.close()
        print(f"{self.name} deleted successfully!")
    
    def update(self, new_name, new_price):
        conn = connect()
        cur = conn.cursor()
        query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        cur.execute(query, (new_name, new_price, self.name))
        conn.commit()
        cur.close()
        conn.close()
        print(f"{self.name} updated to {new_name} ({new_price})")
        
        self.name = new_name
        self.price = new_price
