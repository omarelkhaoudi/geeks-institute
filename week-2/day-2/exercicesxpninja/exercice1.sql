--1)
SELECT customer_first_name, customer_last_name
FROM customers
ORDER BY customer_last_name ASC
LIMIT 2;

--2)
DELETE FROM purchases
WHERE customer_id = (
    SELECT id FROM customers
    WHERE customer_first_name = 'Scott'
);

--3)
SELECT * FROM customers
WHERE customer_first_name = 'Scott';

--4)
SELECT p.id, c.customer_first_name, c.customer_last_name, p.item_id, p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.customer_id;

--5)
SELECT p.id, c.customer_first_name, c.customer_last_name, p.item_id, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id;




