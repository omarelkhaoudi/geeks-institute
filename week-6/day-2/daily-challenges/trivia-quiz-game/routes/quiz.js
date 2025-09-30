const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Fake session (mémoire locale)
let currentQuestionIndex = 0;
let score = 0;

// ✅ GET /quiz → Start or continue quiz
router.get("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz finished!", score });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex].question;
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: currentQuestion,
  });
});

// ✅ POST /quiz → Submit answer
router.post("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz already finished!", score });
  }

  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;
  if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Wrong! The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({ feedback, message: "Quiz finished! Go to /quiz/score" });
  }
});

// ✅ GET /quiz/score → Show final score
router.get("/score", (req, res) => {
  res.json({
    message: "🎉 Final Score",
    score,
    total: triviaQuestions.length,
  });

  // Reset for replay
  currentQuestionIndex = 0;
  score = 0;
});

module.exports = router;
