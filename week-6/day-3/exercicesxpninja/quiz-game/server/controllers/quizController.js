const db = require("../config/db");

const getQuestion = (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM questions WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Question not found" });
    res.json(row);
  });
};

const checkAnswer = (req, res) => {
  const { questionId, answer } = req.body;
  db.get("SELECT * FROM questions WHERE id = ?", [questionId], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Question not found" });

    res.json({ correct: row.correct_answer === answer });
  });
};

module.exports = { getQuestion, checkAnswer };
