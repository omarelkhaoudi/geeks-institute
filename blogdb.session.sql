CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'posts';

