from flask import Flask, render_template, request, redirect, url_for
from db_config import connect

app = Flask(__name__)

# ---------- Routes ----------

@app.route('/')
def menu():
    conn = connect()
    cur = conn.cursor()
    cur.execute("SELECT item_name, item_price FROM Menu_Items")
    items = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("menu.html", items=items)

@app.route('/add', methods=['GET', 'POST'])
def add_item():
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']

        conn = connect()
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for('menu'))

    return render_template("add_item.html")

@app.route('/update/<string:name>', methods=['GET', 'POST'])
def update_item(name):
    conn = connect()
    cur = conn.cursor()

    if request.method == 'POST':
        new_name = request.form['name']
        new_price = request.form['price']
        cur.execute(
            "UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_name=%s",
            (new_name, new_price, name)
        )
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for('menu'))

    cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name=%s", (name,))
    item = cur.fetchone()
    cur.close()
    conn.close()

    if item:
        return render_template("update_item.html", item=item)
    else:
        return "Item not found"

@app.route('/delete/<string:name>')
def delete_item(name):
    conn = connect()
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_Items WHERE item_name=%s", (name,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for('menu'))

# ---------- Run App ----------
if __name__ == '__main__':
    app.run(debug=True)
