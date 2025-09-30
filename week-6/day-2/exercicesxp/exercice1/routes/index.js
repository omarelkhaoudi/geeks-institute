const express = require("express");
const router = express.Router();

// Homepage
router.get("/", (req, res) => {
  res.send("🏠 Welcome to the Homepage!");
});

// About page
router.get("/about", (req, res) => {
  res.send("ℹ️ About Us: This is a simple Express.js application.");
});

module.exports = router;
