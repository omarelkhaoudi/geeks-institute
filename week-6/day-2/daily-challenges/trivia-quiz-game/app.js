const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // sert index.html + css

// =========================
// Base de données trivia
// =========================
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the fastest land animal?", answer: "Cheetah" }
];

// =========================
// Variables de jeu (mémoire)
// =========================
let currentQuestionIndex = 0;
let score = 0;

// =========================
// Routes Quiz
// =========================

// GET /quiz : renvoie la question actuelle
app.get("/quiz", (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.json({ message: "Quiz finished!", score });
  }
});

// POST /quiz : vérifier la réponse + avancer
app.post("/quiz", (req, res) => {
  const { answer } = req.body;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz already finished!", score });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  let message;

  if (answer && answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    message = "✅ Correct!";
  } else {
    message = `❌ Wrong! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      message,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  } else {
    res.json({
      message,
      score,
      finished: true
    });
  }
});

// GET /quiz/score : afficher ou reset le score
app.get("/quiz/score", (req, res) => {
  if (req.query.reset === "true") {
    currentQuestionIndex = 0;
    score = 0;
    return res.json({ message: "Game reset!" });
  }

  res.json({ score, total: triviaQuestions.length });
});

// =========================
// Lancer serveur
// =========================
app.listen(PORT, () => {
  console.log(`🚀 Trivia Quiz Game running at http://localhost:${PORT}`);
});
