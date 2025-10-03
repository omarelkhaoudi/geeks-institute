const db = require("../config/db");

const getAllTodos = (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows); // rows contient id, title, completed
  });
};

const getTodoById = (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM todos WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Todo not found" });
    res.json(row);
  });
};

module.exports = {
  getAllTodos,
  getTodoById
};
