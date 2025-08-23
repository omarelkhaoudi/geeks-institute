-- Part 1
--1)
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);
CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES Customer(id) ON DELETE CASCADE
);

--2)
INSERT INTO Customer (first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

--3)
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (
    TRUE,
    (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (
    FALSE,
    (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);

--4)
SELECT first_name FROM customer c
INNER JOIN customerprofile cp ON c.id = cp.customer_id

SELECT c.first_name, cp.isloggedin FROM customer c
LEFT JOIN customerprofile cp ON c.id = cp.customer_id

SELECT COUNT (*) AS not_logged_in_customers
FROM customer c
INNER JOIN customerprofile cp ON c.id != cp.customer_id

--Part 2
--1)
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

--2)
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To Kill a Mockingbird', 'Harper Lee');

--3)
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

--4)
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

--5)
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

--6)
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2022-02-15'
FROM Book b, Student s
WHERE b.title = 'Alice In Wonderland'
  AND s.name = 'John';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-03-03'
FROM Book b, Student s
WHERE b.title = 'To kill a mockingbird'
  AND s.name = 'Bob';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-05-23'
FROM Book b, Student s
WHERE b.title = 'Alice In Wonderland'
  AND s.name = 'Lera';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT b.book_id, s.student_id, '2021-08-12'
FROM Book b, Student s
WHERE b.title = 'Harry Potter'
  AND s.name = 'Bob';

--7)1)
SELECT * 
FROM Library;

--2)
SELECT s.name AS student_name, b.title AS book_title, l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

--3)
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

--4)
DELETE FROM Student WHERE name = 'John';


































