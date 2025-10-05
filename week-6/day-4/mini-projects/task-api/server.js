const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
