let score = 0;

const emojiDisplay = document.getElementById("emoji-display");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

let correctName = "";

function loadEmoji() {
  fetch("/api/emoji")
    .then(res => res.json())
    .then(data => {
      correctName = data.correctName;
      emojiDisplay.textContent = data.emoji;
      optionsContainer.innerHTML = "";

      data.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
      });

      feedback.textContent = "";
    });
}

function checkAnswer(selected) {
  if (selected === correctName) {
    score++;
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Wrong! It was "${correctName}"`;
  }
  scoreDisplay.textContent = `Score: ${score}`;

  setTimeout(loadEmoji, 1000); // Load next emoji after 1s
}

// Load first emoji
loadEmoji();
