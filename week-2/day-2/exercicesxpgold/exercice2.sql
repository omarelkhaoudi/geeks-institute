--1)
UPDATE students
SET birth_date = '1998-11-02'
WHERE (first_name = 'Lea' AND last_name = 'Benichou')
   OR (first_name = 'Marc' AND last_name = 'Benichou');

--2)
UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

--3)
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

--4)
SELECT COUNT(*) AS total_students
FROM students;

--5)
SELECT COUNT(*) AS born_after_2000
FROM students
WHERE birth_date > '2000-01-01';

--6)    
ALTER TABLE students
ADD COLUMN math_grade INT;

--7)
UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id IN (2, 4);
UPDATE students SET math_grade = 40 WHERE id = 6;

--8)
SELECT COUNT(*) AS students_above_83
FROM students
WHERE math_grade > 83;

--9)
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '2001-05-10', 70);

--10)
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

--11)
SELECT SUM(math_grade) AS total_sum_grades
FROM students;







