const express = require("express");
const path = require("path");
const greetingRoutes = require("./routes/greeting");

const app = express();
const PORT = 3000;

// Middleware pour lire les données des formulaires
app.use(express.urlencoded({ extended: true }));

// Configurer EJS comme moteur de vues
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", greetingRoutes);

// Lancer serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
