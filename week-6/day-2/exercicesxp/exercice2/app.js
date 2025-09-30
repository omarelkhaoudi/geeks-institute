const express = require("express");
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Importer et monter le router
const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`📝 Todo API running on http://localhost:${PORT}`);
});
