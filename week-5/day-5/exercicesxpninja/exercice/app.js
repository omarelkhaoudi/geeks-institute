const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Questions en mémoire
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"],
    answer: "Shakespeare"
  }
];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Endpoint pour récupérer les questions
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => console.log(`🎮 Quiz Game running on http://localhost:${PORT}`));
