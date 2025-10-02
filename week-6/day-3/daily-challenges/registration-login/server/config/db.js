const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/config/userdb.db');

// Créer tables si elles n’existent pas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    username TEXT UNIQUE,
    first_name TEXT,
    last_name TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS hashpwd (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);
});

module.exports = db;
