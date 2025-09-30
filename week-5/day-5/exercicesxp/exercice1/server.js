// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Fake database (array of blog posts)
let posts = [
  { id: 1, title: "First Post", content: "This is the first blog post." },
  { id: 2, title: "Second Post", content: "This is the second blog post." }
];
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});
// ✅ GET /posts → Get all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// ✅ GET /posts/:id → Get a post by ID
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

// ✅ POST /posts → Create a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// ✅ PUT /posts/:id → Update a post
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

// ✅ DELETE /posts/:id → Delete a post
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deletedPost = posts.splice(postIndex, 1);
  res.json({ message: "Post deleted", post: deletedPost[0] });
});

// ❌ Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ⚡ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
