SELECT rating, COUNT(*) AS total_films
FROM film
GROUP BY rating
ORDER BY rating;

SELECT film_id, title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13');

SELECT film_id, title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title;

UPDATE customer
SET first_name = 'Omar',
    last_name = 'EL KHAOUDI',
    email = 'omar@example.com'
WHERE customer_id = 5;

SELECT address_id
FROM customer
WHERE customer_id = 5;

UPDATE address
SET address = '123 Avenue des Fleurs',
    district = 'Casablanca',
    postal_code = '20250',
    phone = '0612345678'
WHERE address_id = 9;





