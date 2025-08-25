--1)
SELECT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id 
    AND r.return_date IS NULL 
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;

--2)
CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL REFERENCES film(film_id),
    customer_id INT NOT NULL REFERENCES customer(customer_id),
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--3)
SELECT f.title, COUNT(w.waiting_id) AS nb_people_waiting
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.title
ORDER BY nb_people_waiting DESC;

