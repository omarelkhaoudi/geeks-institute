CREATE TABLE items (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_last_name VARCHAR(50) NOT NULL,
    customer_first_name VARCHAR(50) NOT NULL
);

INSERT INTO items (item_id, item_name, price) VALUES 
(1 , 'Small Desk', 100),
(2 , 'Large desk ', 300),
(3 , 'Fan ', 80);

INSERT INTO customers (customer_id, customer_last_name, customer_first_name) VALUES 
(1,'Greg', 'Jones'),
(2,'Sandra', 'Jones'),
(3,'Scott', 'Scott'),
(4,'Trevor', 'Green'),
(5,'Melanie', 'Johnson');

--1)
SELECT * 
FROM items
ORDER BY price ASC;

--2)
SELECT * 
FROM items
WHERE price >= 80
ORDER BY price DESC;

--3)
SELECT customer_first_name, customer_last_name
FROM customers
ORDER BY customer_first_name ASC
LIMIT 3;

--4)
SELECT customer_last_name
FROM customers
ORDER BY customer_last_name DESC;





















