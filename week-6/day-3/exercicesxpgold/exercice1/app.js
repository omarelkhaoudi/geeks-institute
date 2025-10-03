// app.js
const express = require("express");
const cors = require("cors");
const db = require("./server/config/db"); // <-- même DB que seedTodos.js

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all todos
app.get("/api/todos", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET todo by id
app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM todos WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Todo not found" });
    res.json(row);
  });
});

// POST create todo
app.post("/api/todos", (req, res) => {
  const { title, completed = 0 } = req.body;
  db.run(
    "INSERT INTO todos (title, completed) VALUES (?, ?)",
    [title, completed],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, title, completed });
    }
  );
});

// PUT update todo
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  db.run(
    "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
    [title, completed, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ message: "Todo not found" });
      res.json({ id, title, completed });
    }
  );
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM todos WHERE id = ?", [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
