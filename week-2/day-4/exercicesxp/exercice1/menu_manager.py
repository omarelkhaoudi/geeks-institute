from db_config import connect
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = connect()
        cur = conn.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
        cur.execute(query, (name,))
        row = cur.fetchone()
        cur.close()
        conn.close()
        
        if row:
            return MenuItem(row[0], row[1])
        else:
            return None

    @classmethod
    def all_items(cls):
        conn = connect()
        cur = conn.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items"
        cur.execute(query)
        rows = cur.fetchall()
        cur.close()
        conn.close()
        
        return [MenuItem(row[0], row[1]) for row in rows]
