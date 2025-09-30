const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Emoji data
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "🚗", name: "Car" },
  { emoji: "⚽", name: "Soccer" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🌞", name: "Sun" }
];

// Endpoint to get a random emoji and options
app.get("/api/emoji", (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correct.name]);

  while (options.size < 4) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(randomOption);
  }

  // Shuffle options
  const shuffledOptions = [...options].sort(() => Math.random() - 0.5);
  res.json({ emoji: correct.emoji, correctName: correct.name, options: shuffledOptions });
});

app.listen(PORT, () => console.log(`🎮 Emoji Game running on http://localhost:${PORT}`));
