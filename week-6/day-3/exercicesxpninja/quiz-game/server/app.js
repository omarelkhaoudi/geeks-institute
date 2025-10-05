const express = require("express");
const cors = require("cors");
const path = require("path");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Serveur des fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "..", "public")));

// API routes
app.use("/api", quizRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
