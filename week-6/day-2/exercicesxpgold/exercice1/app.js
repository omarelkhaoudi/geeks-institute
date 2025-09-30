const express = require("express");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = 3000;

app.use(express.json());

// Monter le router
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Blog API running on http://localhost:${PORT}`);
});
