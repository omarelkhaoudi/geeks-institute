const db = require("./server/config/db");

// Supprime la table si elle existe (⚠️ ça efface tout à chaque seed)
db.run("DROP TABLE IF EXISTS todos", (err) => {
  if (err) return console.error("Erreur suppression table:", err.message);

  console.log("🗑️ Ancienne table supprimée");

  // Recrée la table
  db.run(
    `CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER NOT NULL
    )`,
    (err) => {
      if (err) {
        console.error("Erreur création table:", err.message);
      } else {
        console.log("✅ Table 'todos' recréée");

        // Données initiales
        const todos = [
          { title: "Apprendre Node.js", completed: 0 },
          { title: "Faire les courses", completed: 1 },
          { title: "Aller à la salle de sport", completed: 0 },
          { title: "Réviser les exercices Express.js", completed: 0 },
          { title: "Préparer la présentation du projet", completed: 1 },
          { title: "Lire un chapitre du livre", completed: 0 },
          { title: "Regarder un tuto sur React", completed: 0 },
          { title: "Nettoyer la maison", completed: 1 },
          { title: "Écrire dans mon journal", completed: 0 },
          { title: "Faire une marche de 30 minutes", completed: 0 }
        ];

        // Insère les todos
        todos.forEach((todo) => {
          db.run(
            "INSERT INTO todos (title, completed) VALUES (?, ?)",
            [todo.title, todo.completed],
            function (err) {
              if (err) console.error("Erreur insertion:", err.message);
            }
          );
        });

        console.log("✅ Todos insérés !");
      }
    }
  );
});
