const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.resolve(__dirname, "todos.db"), (err) => {
  if (err) {
    console.error("Erreur de connexion à SQLite:", err.message);
  } else {
    console.log("Connecté à SQLite");
  }
});

// Créer la table si elle n’existe pas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    )
  `);
});

module.exports = db;
