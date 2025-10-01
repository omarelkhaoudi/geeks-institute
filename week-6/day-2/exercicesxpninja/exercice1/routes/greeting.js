const express = require("express");
const path = require("path");
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET / -> afficher le formulaire
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/form.html"));
});

// POST /greet -> afficher la page de greeting
router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name || name.trim() === "") {
    return res.send("<h2>⚠️ Please enter your name!</h2><a href='/'>Go Back</a>");
  }

  res.render("greeting", { name, emoji });
});

module.exports = router;
