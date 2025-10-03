const db = require("../config/db");

const Todo = {
  getAll: (callback) => {
    db.all("SELECT * FROM todos", [], callback);
  },

  getById: (id, callback) => {
    db.get("SELECT * FROM todos WHERE id = ?", [id], callback);
  },

  create: (title, callback) => {
    db.run(
      "INSERT INTO todos (title, completed) VALUES (?, ?)",
      [title, 0],
      function (err) {
        if (err) return callback(err);
        // this.lastID contient l'id généré par SQLite
        callback(null, { id: this.lastID, title, completed: 0 });
      }
    );
  },

  update: (id, title, completed, callback) => {
    db.run(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
      [title, completed, id],
      function (err) {
        callback(err, { id, title, completed });
      }
    );
  },

  delete: (id, callback) => {
    db.run("DELETE FROM todos WHERE id = ?", [id], function (err) {
      callback(err);
    });
  },
};

module.exports = Todo;
