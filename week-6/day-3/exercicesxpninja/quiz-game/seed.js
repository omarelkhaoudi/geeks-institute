const db = require("./server/config/db");

// Supprime les tables si elles existent
db.serialize(() => {
  db.run("DROP TABLE IF EXISTS questions");
  db.run("DROP TABLE IF EXISTS options");
  db.run("DROP TABLE IF EXISTS questions_options");

  // Crée les tables
  db.run(`
    CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT NOT NULL,
      correctAnswer INTEGER NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE options (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      option TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE questions_options (
      question_id INTEGER,
      option_id INTEGER,
      FOREIGN KEY(question_id) REFERENCES questions(id),
      FOREIGN KEY(option_id) REFERENCES options(id)
    )
  `);

  // Insère les données
  db.run("INSERT INTO questions (question, correctAnswer) VALUES (?, ?)", [
    "Quelle est la capitale de la France ?", 1
  ]);

  db.run("INSERT INTO options (option) VALUES (?)", ["Paris"]);
  db.run("INSERT INTO options (option) VALUES (?)", ["Londres"]);
  db.run("INSERT INTO options (option) VALUES (?)", ["Rome"]);

  db.run("INSERT INTO questions_options (question_id, option_id) VALUES (?, ?)", [1, 1]);
  db.run("INSERT INTO questions_options (question_id, option_id) VALUES (?, ?)", [1, 2]);
  db.run("INSERT INTO questions_options (question_id, option_id) VALUES (?, ?)", [1, 3]);

  console.log("✅ Données insérées !");
});
