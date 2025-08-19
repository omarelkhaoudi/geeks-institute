CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE
);

INSERT INTO students(id, first_name, last_name, birth_date) VALUES 
(1, 'Marc' ,'Benichou' ,'02/11/1998'),
(2, 'Yoan', 'Cohen', '03/12/2010'),
(3, 'Lea', 'Benichou', '27/07/1987'),
(4, 'Amelia','Dux', '07/04/1996'),
(5, 'David','Grez', '14/06/2003'),
(6, 'Omer','Simpson', '03/10/1980');

INSERT INTO students (id, first_name, last_name, birth_date) VALUES
(7, 'Omar', 'El Khaoudi', '2003-01-09');

-- select queries

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students WHERE id = 2;

SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a%';

SELECT first_name, last_name FROM students
WHERE first_name LIKE 'a%';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a';

SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a_';

SELECT first_name, last_name FROM students
WHERE id IN (1, 3);

SELECT * FROM students
WHERE birth_date >= '2000-01-01';























