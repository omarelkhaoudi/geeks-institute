const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Fake DB (in-memory)
let todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build Express API", completed: true },
  { id: 3, title: "Test API with Postman", completed: false }
];

// ✅ CREATE
app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTodo = { 
    id: todos.length ? todos[todos.length - 1].id + 1 : 1, 
    title, 
    completed: completed || false 
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ✅ READ ALL
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// ✅ READ ONE
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// ✅ UPDATE
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// ✅ DELETE
app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  const deleted = todos.splice(index, 1);
  res.json({ message: "Todo deleted", todo: deleted[0] });
});

// ✅ START SERVER
app.listen(PORT, () => console.log(`📝 Todo API running on http://localhost:${PORT}`));
