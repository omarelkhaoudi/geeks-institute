const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

// Helper pour lire les tâches
function readTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
}

// Helper pour écrire les tâches
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// 📌 Récupérer toutes les tâches
exports.getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

// 📌 Récupérer une tâche par ID
exports.getTaskById = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};

// 📌 Créer une nouvelle tâche
exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

// 📌 Mettre à jour une tâche
exports.updateTask = (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (title !== undefined) tasks[taskIndex].title = title;
  if (description !== undefined) tasks[taskIndex].description = description;
  if (completed !== undefined) tasks[taskIndex].completed = completed;

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
};

// 📌 Supprimer une tâche
exports.deleteTask = (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.json({ message: "Task deleted", task: deletedTask });
};
