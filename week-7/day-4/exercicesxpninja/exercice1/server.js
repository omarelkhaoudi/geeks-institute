const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour JSON
app.use(express.json());

// Route /users
app.get('/users', (req, res) => {
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
  ]);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
