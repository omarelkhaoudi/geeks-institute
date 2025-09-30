let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const TIME_PER_QUESTION = 10; // secondes

const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

// Fetch questions from backend
fetch("/api/questions")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  clearTimeout(timer);

  if (currentQuestionIndex >= questions.length) {
    questionContainer.textContent = "Quiz Finished!";
    choicesContainer.innerHTML = "";
    scoreContainer.textContent = `Your score: ${score} / ${questions.length}`;
    nextBtn.style.display = "none";
    return;
  }

  const q = questions[currentQuestionIndex];
  questionContainer.textContent = `${q.question} (You have ${TIME_PER_QUESTION} sec)`;
  choicesContainer.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesContainer.appendChild(btn);
  });

  // Timer
  let timeLeft = TIME_PER_QUESTION;
  timer = setInterval(() => {
    timeLeft--;
    questionContainer.textContent = `${q.question} (You have ${timeLeft} sec)`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      currentQuestionIndex++;
      showQuestion();
    }
  }, 1000);
}

function selectAnswer(choice) {
  const q = questions[currentQuestionIndex];
  if (choice === q.answer) score++;
  clearInterval(timer); // Stop timer si user répond
  currentQuestionIndex++;
  showQuestion();
}

nextBtn.onclick = () => {
  showQuestion();
};
