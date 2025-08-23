--1)
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT NOW(),
    customer_name VARCHAR(100)
);
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

--2)
CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS NUMERIC(10,2) AS $$
DECLARE
    total NUMERIC(10,2);
BEGIN
    SELECT COALESCE(SUM(price), 0)
    INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;

--3)1)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100)
);

ALTER TABLE product_orders
ADD COLUMN user_id INT REFERENCES users(user_id) ON DELETE CASCADE;

--2)
CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
RETURNS NUMERIC(10,2) AS $$
DECLARE
    total NUMERIC(10,2);
BEGIN
    SELECT COALESCE(SUM(i.price), 0)
    INTO total
    FROM items i
    JOIN product_orders o ON i.order_id = o.order_id
    WHERE o.user_id = p_user_id
      AND o.order_id = p_order_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;



