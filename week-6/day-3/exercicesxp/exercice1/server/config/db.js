const { Pool } = require("pg");  // <-- il manquait ça !

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "root",
  port: 5432
});

// Test connexion
pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL");
    client.release();
  })
  .catch(err => console.error("❌ PostgreSQL connection error:", err.stack));

module.exports = pool;
