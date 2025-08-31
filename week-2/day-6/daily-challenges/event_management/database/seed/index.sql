-- Drop existing (dev only)
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS organizers CASCADE;
DROP TABLE IF EXISTS attendees CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Users (for auth)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Organizers
CREATE TABLE organizers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  contact_info TEXT
);

-- Events
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(180) NOT NULL,
  description TEXT,
  organizer_id INT NOT NULL REFERENCES organizers(id) ON DELETE CASCADE
);
CREATE INDEX idx_events_name ON events (name);
CREATE INDEX idx_events_date ON events (date);

-- Attendees
CREATE TABLE attendees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) UNIQUE NOT NULL,
  phone VARCHAR(40)
);

-- Tickets (registrations) many-to-many
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  event_id INT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  attendee_id INT NOT NULL REFERENCES attendees(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(event_id, attendee_id)
);

-- (Optional) Comments - handy for future bonus
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  event_id INT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  attendee_id INT NOT NULL REFERENCES attendees(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed organizers
INSERT INTO organizers (name, contact_info) VALUES
('Lambda Logistics', 'lambda@example.com'),
('Mu Management', 'mu@example.com'),
('Nu Nexus', 'nu@example.com'),
('Xi Xperience', 'xi@example.com'),
('Omicron Org', 'omicron@example.com'),
('Pi Productions', 'pi@example.com'),
('Rho Records', 'rho@example.com'),
('Sigma Solutions', 'sigma@example.com'),
('Tau Teamworks', 'tau@example.com'),
('Upsilon United', 'upsilon@example.com');


-- Seed events (10+)
INSERT INTO events (name, date, location, description, organizer_id) VALUES
('Film Festival', '2025-12-10', 'Marrakech', 'Annual international film festival.', 1),
('AI Workshop', '2025-09-22', 'Casablanca', 'Hands-on session on Artificial Intelligence.', 2),
('Job Fair', '2025-10-07', 'Rabat', 'Career and internship opportunities.', 3),
('Jazz Night', '2025-11-20', 'Tangier', 'Live jazz concert.', 4),
('Book Expo', '2025-09-28', 'Casablanca', 'Book exhibition and author talks.', 5),
('Green Energy Forum', '2025-10-15', 'Agadir', 'Renewable energy conference.', 6),
('Fashion Show', '2025-12-05', 'Marrakech', 'Showcasing local and international designers.', 7),
('Startup Bootcamp', '2025-09-30', 'Fes', 'Entrepreneurship training program.', 8),
('Food Festival', '2025-11-02', 'Rabat', 'Street food and culinary experiences.', 9),
('Robotics Challenge', '2025-10-25', 'Casablanca', 'Robotics and innovation competition.', 10);


-- Seed attendees (15+)
INSERT INTO attendees (name, email, phone) VALUES
('Ayoub', 'ayoub@example.com', '0610707070'),
('Fatima', 'fatima@example.com', '0610808080'),
('Soufiane', 'soufiane@example.com', '0610909090'),
('Lina', 'lina@example.com', '0611112121'),
('Mehdi', 'mehdi@example.com', '0611213141'),
('Imane', 'imane@example.com', '0611314151'),
('Adil', 'adil@example.com', '0611415161'),
('Samira', 'samira@example.com', '0611516171'),
('Othmane', 'othmane@example.com', '0611617181'),
('Meryem', 'meryem@example.com', '0611718191'),
('Khalid', 'khalid@example.com', '0611819202'),
('Houda', 'houda@example.com', '0611920212'),
('Reda', 'reda@example.com', '0612021222'),
('Sanaa', 'sanaa@example.com', '0612122232'),
('Yassine', 'yassine@example.com', '0612223242');


-- Seed tickets
INSERT INTO tickets (event_id, attendee_id) VALUES
(1,10),(1,11),(1,12),
(2,13),(2,14),
(3,15),(3,5),(3,9),
(4,2),(4,6),(4,13),
(5,3),(5,7),(5,14),
(6,4),(6,8),(6,12),
(7,1),(7,9),(7,15),
(8,2),(8,10),
(9,11),(9,13),(9,14),
(10,5),(10,6),(10,15);

-- Sample users (password: password)
INSERT INTO users (username, email, password_hash) VALUES
('admin', 'admin@example.com', '$pbkdf2-sha256$600000$gH2Xxq2gqOk9vL3n1m6F3Q$Go8Hc9gH6qZP1Yw7x5oFDv2wMZQx9h5m3p5cYQzRkqY'), -- placeholder, will be overwritten on first run
('user', 'user@example.com', '$pbkdf2-sha256$600000$gH2Xxq2gqOk9vL3n1m6F3Q$Go8Hc9gH6qZP1Yw7x5oFDv2wMZQx9h5m3p5cYQzRkqY');


CREATE TABLE api_keys (
    id SERIAL PRIMARY KEY,
    key_value TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO api_keys (key_value) VALUES ('456789');  


SELECT * FROM events;