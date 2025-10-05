const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Routes correctes
router.get("/question/:id", quizController.getQuestion);
router.post("/answer", quizController.checkAnswer);

module.exports = router;
