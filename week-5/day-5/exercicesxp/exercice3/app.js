// app.js
const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// ✅ Endpoint pour récupérer les posts via notre module
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("✅ Data retrieved and sent as response");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// 🚀 Lancer le serveur
app.listen(PORT, () => {
  console.log(`📡 CRUD API running on http://localhost:${PORT}`);
});
