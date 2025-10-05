const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Chemin vers le fichier de base de données persistante
const dbPath = path.resolve(__dirname, "quiz.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erreur lors de l'ouverture de la base de données:", err.message);
  } else {
    console.log("Base de données SQLite connectée:", dbPath);
  }
});

// Crée la table questions si elle n'existe pas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT NOT NULL,
      correct_answer TEXT NOT NULL
    )
  `);

  // Vérifie si la table est vide, et ajoute des questions test
  db.get("SELECT COUNT(*) AS count FROM questions", (err, row) => {
    if (err) {
      console.error("Erreur lors de la vérification des questions:", err.message);
      return;
    }

    if (row.count === 0) {
      const stmt = db.prepare(
        "INSERT INTO questions (question, correct_answer) VALUES (?, ?)"
      );
      stmt.run("Quelle est la capitale de la France ?", "Paris");
      stmt.run("Combien font 2 + 2 ?", "4");
      stmt.run("Quelle couleur obtient-on en mélangeant le bleu et le jaune ?", "Vert");
      stmt.run("Quel est le plus grand océan du monde ?", "Pacifique");
      stmt.finalize();
      console.log("Questions initiales ajoutées à la base de données.");
    }
  });
});

module.exports = db;
