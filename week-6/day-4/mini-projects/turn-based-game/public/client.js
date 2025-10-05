let game;
let player = "player1"; // or player2 for testing

const gridEl = document.getElementById("grid");
const infoEl = document.getElementById("info");

// Render grid
function renderGrid() {
  gridEl.innerHTML = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (game.players.player1.x === x && game.players.player1.y === y) cell.classList.add("player1");
      if (game.players.player2.x === x && game.players.player2.y === y) cell.classList.add("player2");
      if (game.players.player1.base.x === x && game.players.player1.base.y === y) cell.classList.add("base");
      if (game.players.player2.base.x === x && game.players.player2.base.y === y) cell.classList.add("base");

      gridEl.appendChild(cell);
    }
  }

  infoEl.textContent = game.winner ? `${game.winner} wins!` : `Turn: ${game.turn}`;
}

// Start new game
document.getElementById("startBtn").addEventListener("click", async () => {
  const res = await fetch("/api/start", { method: "POST" });
  game = await res.json().then(data => data.game);
  renderGrid();
});

// Move player
document.querySelectorAll("#controls button").forEach(btn => {
  btn.addEventListener("click", async () => {
    if (!game || game.winner) return;
    const direction = btn.dataset.dir;
    const res = await fetch("/api/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ player, direction })
    });
    const data = await res.json();
    game = data.game;
    renderGrid();
  });
});
