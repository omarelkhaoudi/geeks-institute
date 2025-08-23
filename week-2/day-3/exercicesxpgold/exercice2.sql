--1)
SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

--2)
SELECT COUNT(*) AS total_stores
FROM store;

--3)
SELECT s.store_id, SUM(f.length) AS total_minutes,
       SUM(f.length)/60.0 AS total_hours,
       SUM(f.length)/1440.0 AS total_days
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

--4)
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city IN (
    SELECT ci2.city
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
);

--5)
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country IN (
    SELECT co2.country
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
    JOIN country co2 ON ci2.country_id = co2.country_id
);

--6)
SELECT f.film_id, f.title, f.length,
       f.length/60.0 AS hours,
       f.length/1440.0 AS days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title !~* '(beast|monster|ghost|dead|zombie|undead)'
  AND f.description !~* '(beast|monster|ghost|dead|zombie|undead)';

--7)
SELECT SUM(f.length) AS total_minutes,
       SUM(f.length)/60.0 AS total_hours,
       SUM(f.length)/1440.0 AS total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title !~* '(beast|monster|ghost|dead|zombie|undead)'
  AND f.description !~* '(beast|monster|ghost|dead|zombie|undead)';





