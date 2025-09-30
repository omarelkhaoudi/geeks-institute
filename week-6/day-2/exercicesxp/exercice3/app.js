const express = require("express");
const app = express();
const PORT = 3004;

// Middleware pour parser le JSON
app.use(express.json());

// Import du router
const bookRoutes = require("./routes/books");

// Montage du router
app.use("/books", bookRoutes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`📚 Book API running on http://localhost:${PORT}`);
});
