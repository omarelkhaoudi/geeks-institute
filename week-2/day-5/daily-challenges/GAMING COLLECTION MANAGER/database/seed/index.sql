-- Developers
CREATE TABLE IF NOT EXISTS developers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50)
);

-- Platforms
CREATE TABLE IF NOT EXISTS platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100)
);

-- Games
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    release_year INT,
    description TEXT,
    developer_id INT,                           -- ID du développeur
    platform_id INT,                            -- ID de la plateforme
    image_url VARCHAR(255),                     -- URL ou chemin de l'image du jeu
    rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),  -- Note moyenne
    tags VARCHAR(255),                          -- Tags séparés par virgule (ex: RPG,Action)
    metacritic_score INT CHECK (metacritic_score >= 0 AND metacritic_score <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (developer_id) REFERENCES developers(id) 
    FOREIGN KEY (platform_id) REFERENCES platforms(id)
);

SELECT conname
FROM pg_constraint
WHERE conrelid = 'games'::regclass;

ALTER TABLE games DROP CONSTRAINT games_developer_id_fkey;
ALTER TABLE games DROP CONSTRAINT games_platform_id_fkey;

ALTER TABLE developers ADD COLUMN logo_url VARCHAR(255);

UPDATE developers SET logo_url = 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg' WHERE name='Nintendo';
UPDATE developers SET logo_url = 'https://d18qa1zi1lagoc.cloudfront.net/articles/vANcY4ntjviFfM3WzEZHboRIabdvEibaiiye7WtD.jpg' WHERE name='Ubisoft';
UPDATE developers SET logo_url = 'https://logos-world.net/wp-content/uploads/2021/02/Bethesda-Emblem.jpg' WHERE name='Bethesda';
UPDATE developers SET logo_url = 'https://www.culture-games.com/wp-content/uploads/societes/From-Software-liste.jpg' WHERE name='FromSoftware';
UPDATE developers SET logo_url = 'https://www.cdprojektred.com/build/images/cdpr-default-e45439ba.jpg' WHERE name='CD Projekt Red';

SELECT id, name, logo_url FROM developers;


ALTER TABLE games
ADD CONSTRAINT games_developer_id_fkey
FOREIGN KEY (developer_id) REFERENCES developers(id) ON DELETE CASCADE;

ALTER TABLE games
ADD CONSTRAINT games_platform_id_fkey
FOREIGN KEY (platform_id) REFERENCES platforms(id) ON DELETE CASCADE;

-- One-to-Many: game_developers




-- Many-to-Many: game_platforms
CREATE TABLE IF NOT EXISTS game_platforms (
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    platform_id INT REFERENCES platforms(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, platform_id)
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- hashé
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    game_id INT REFERENCES games(id),
    rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Sample data
INSERT INTO developers (name, country) VALUES
('Nintendo', 'Japan'),
('Ubisoft', 'France'),
('Bethesda', 'USA');

INSERT INTO platforms (name, manufacturer) VALUES
('Switch', 'Nintendo'),
('PC', 'Various'),
('PlayStation 5', 'Sony');

INSERT INTO platforms (name, manufacturer) VALUES
('Xbox Series X', 'Microsoft'),
('PlayStation 4', 'Sony'),
('Xbox One', 'Microsoft');

INSERT INTO games (
    title, genre, release_year, description,
    developer_id, platform_id, image_url, rating,
    tags, metacritic_score
) VALUES
(
    'The Legend of Zelda: Breath of the Wild',
    'Action-Adventure',
    2017,
    'Explorez le royaume d’Hyrule en monde ouvert avec Link.',
    1,  -- ID du développeur
    1,  -- ID de la plateforme
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSk6rxsb2IRbTxjpr_b1wgg7oYPdBF3DBFuFjzTH-KtWKIBMgJZ9ZQ0IhszBcDWcs8nnQpMrgdnum6Y_fBVIGXJiWj8GpUURjipYD-mAq0',
    4.9,
    'Adventure,RPG,Open World',
    97
),
(
    'Assassin''s Creed Valhalla',
    'Action-RPG',
    2020,
    'Incarnez un Viking dans une aventure épique en Angleterre.',
    2,  -- ID du développeur
    2,  -- ID de la plateforme
    'https://cdn1.epicgames.com/salesEvent/salesEvent/AC2_GameName_Store_Landscape_2560x1440_2560x1440-402749b1769174ecf0cd3d7a5014d9d4',
    4.5,
    'Action,RPG,Historical',
    85
),
(
    'God of War (2018)',
    'Action-Adventure',
    2018,
    'Partez en voyage avec Kratos et son fils Atreus à travers la mythologie nordique.',
    3,
    1,
    'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67',
    4.8,
    'Action,Adventure,Mythology',
    94
);

INSERT INTO developers (name, country) VALUES
('FromSoftware', 'Maroc'),
('CD Projekt Red', 'Poland');

INSERT INTO games (
    title, genre, release_year, description,
    developer_id, platform_id, image_url, rating,
    tags, metacritic_score
) VALUES
(
    'Horizon Zero Dawn',
    'Action-RPG',
    2017,
    'Explorez un monde post-apocalyptique peuplé de créatures robotiques avec Aloy.',
    3,  -- Bethesda (ou tu peux mettre 1 si tu veux correspondre à un autre dev)
    3,  -- PlayStation 5
    'https://cdn1.epicgames.com/offer/f4bfcee7af9b46f182ac93bd01494595/EGS_HorizonZeroDawnRemastered_GuerrillaGames_S1_2560x1440-80eb98c0da167a1828476754d888d352',
    4.7,
    'Action,RPG,Open World',
    89
),
(
    'Mario Kart 8 Deluxe',
    'Racing',
    2017,
    'Participez à des courses endiablées avec vos personnages préférés de Nintendo.',
    1,  -- Nintendo
    1,  -- Switch
    'https://www.ubuy.ma/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFRcnRHMFV3MEwuX1NMMTUwMF8uanBn.jpg',
    4.8,
    'Racing,Multiplayer,Family',
    92
),
(
    'Far Cry 6',
    'Action-Adventure',
    2021,
    'Plongez dans un conflit révolutionnaire sur l’île fictive de Yara.',
    2,  -- Ubisoft
    3,  -- PlayStation 5
    'https://images.unictool.com/unictoolen/assets/article/blog/best-action-adventure-games.jpg',
    4.3,
    'Action,Adventure,Open World',
    79
);







INSERT INTO game_developers (game_id, developer_id) VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO game_platforms (game_id, platform_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 2),
(3, 3);

-- Users
INSERT INTO users (username, email, password) VALUES
('Omar', 'omar@example.com', 'hashedpassword1'),
('Alice', 'alice@example.com', 'hashedpassword2');

-- Reviews
INSERT INTO reviews (user_id, game_id, rating, comment) VALUES
(1, 1, 5.0, 'Incroyable jeu, graphismes et gameplay au top !'),
(2, 2, 4.5, 'Super aventure mais quelques bugs.'),
(1, 3, 4.8, 'Épique et émouvant, Kratos au meilleur de sa forme.');































