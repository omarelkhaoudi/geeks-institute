const express = require("express");
const router = express.Router();

// Fake in-memory database
let todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build a REST API", completed: false },
  { id: 3, title: "Test API with Postman", completed: true },
  { id: 4, title: "Learn Express.js Router", completed: false },
  { id: 5, title: "Deploy API to Heroku", completed: false }
];

// ✅ READ ALL
router.get("/", (req, res) => {
  res.json(todos);
});

// ✅ CREATE
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTodo = { id: todos.length + 1, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ✅ UPDATE
router.put("/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// ✅ DELETE
router.delete("/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  const deleted = todos.splice(index, 1);
  res.json({ message: "Todo deleted", todo: deleted[0] });
});

module.exports = router;
