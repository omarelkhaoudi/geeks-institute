--1)
UPDATE film
SET language_id = 2
WHERE film_id < 10;

--2)
-- store_id -> référence store(store_id)
-- address_id -> référence address(address_id)

--3)
DROP TABLE customer_review;

--4)
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

--5)
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

--6) 
--Film 1
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
  AND a.first_name = 'Penelope'
  AND a.last_name = 'Monroe';

--Film 2
SELECT title
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';

--Film 3
SELECT f.title, f.description, p.amount, r.return_date
FROM film f
INNER JOIN inventory i ON i.film_id = f.film_id
INNER JOIN rental r ON r.inventory_id = i.inventory_id
INNER JOIN customer c ON c.customer_id = r.customer_id
INNER JOIN payment p ON p.rental_id = r.rental_id
WHERE p.amount > 4 
  AND c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--Film 4
SELECT * FROM film f
INNER JOIN inventory i ON i.film_id = f.film_id
INNER JOIN rental r ON r.inventory_id = i.inventory_id
INNER JOIN customer c ON c.customer_id = r.customer_id
WHERE f.title ILIKE '%boat%'
  AND f.description ILIKE '%boat%'
  AND c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  ORDER BY f.rental_rate DESC
LIMIT 1;
