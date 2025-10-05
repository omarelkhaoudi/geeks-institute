const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// 10x10 grid
const GRID_SIZE = 10;

// Game state
let game = {
  players: {
    player1: { x: 0, y: 0, base: { x: 0, y: 0 } },
    player2: { x: 9, y: 9, base: { x: 9, y: 9 } }
  },
  turn: "player1",
  winner: null
};

// Helper: check if move is valid
function isValidMove(x, y) {
  return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE;
}

// Start new game
app.post("/api/start", (req, res) => {
  game = {
    players: {
      player1: { x: 0, y: 0, base: { x: 0, y: 0 } },
      player2: { x: 9, y: 9, base: { x: 9, y: 9 } }
    },
    turn: "player1",
    winner: null
  };
  res.json({ message: "New game started", game });
});

// Get current game state
app.get("/api/game", (req, res) => {
  res.json(game);
});

// Move player
app.post("/api/move", (req, res) => {
  if (game.winner) return res.json({ message: "Game over", game });

  const { player, direction } = req.body;

  if (player !== game.turn) return res.status(400).json({ message: "Not your turn!" });

  const current = game.players[player];
  let { x, y } = current;

  switch (direction) {
    case "up": y -= 1; break;
    case "down": y += 1; break;
    case "left": x -= 1; break;
    case "right": x += 1; break;
    default: return res.status(400).json({ message: "Invalid direction" });
  }

  if (!isValidMove(x, y)) return res.status(400).json({ message: "Move out of bounds" });

  // Update position
  current.x = x;
  current.y = y;

  // Check if captured opponent base
  const opponent = player === "player1" ? game.players.player2 : game.players.player1;
  if (x === opponent.base.x && y === opponent.base.y) {
    game.winner = player;
    return res.json({ message: `${player} wins!`, game });
  }

  // Switch turn
  game.turn = player === "player1" ? "player2" : "player1";

  res.json({ message: "Move successful", game });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
