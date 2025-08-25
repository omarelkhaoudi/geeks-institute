--1)
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    item_id INT REFERENCES items(item_id),
    quantity_purchased INT
);

--2)a)
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE customer_first_name='Scott' AND customer_last_name='Scott'),
    (SELECT item_id FROM items WHERE item_name='Fan'),
    1
);

--2)b)
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE customer_first_name='Melanie' AND customer_last_name='Johnson'),
    (SELECT item_id FROM items WHERE item_name='Large desk'),
    10
);

--2)c)
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE customer_first_name='Greg' AND customer_last_name='Jones'),
    (SELECT item_id FROM items WHERE item_name='Small Desk'),
    2
);

--3)
SELECT * FROM purchases;

--4)
SELECT p.id, c.customer_first_name, c.customer_last_name, p.item_id, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;

--5)
SELECT *
FROM purchases
WHERE customer_id = 5;

--6)
SELECT p.id, c.customer_first_name, c.customer_last_name, i.item_name, p.quantity_purchased
FROM purchases p JOIN customers c
ON p.customer_id = c.customer_id JOIN items i 
ON p.item_id = i.item_id 
WHERE i.item_name IN ('Large desk', 'Small Desk');

--7)
SELECT c.customer_first_name, c.customer_last_name, i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;

--8)
INSERT INTO purchases (customer_id, quantity_purchased)
VALUES (1, 5);
















