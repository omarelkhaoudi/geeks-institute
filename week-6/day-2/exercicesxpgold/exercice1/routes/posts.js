const express = require("express");
const router = express.Router();

// Fake DB (in-memory)
let posts = [
  {
    id: 1,
    title: "Hello World",
    content: "This is my first blog post!",
    timestamp: new Date(),
  },
  {
    id: 2,
    title: "Express is awesome",
    content: "Express.js makes building APIs so easy 🚀",
    timestamp: new Date(),
  },
];

// ✅ GET all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// ✅ GET one post by ID
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// ✅ CREATE a post
router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "Title and content required" });

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    timestamp: new Date(),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// ✅ UPDATE a post
router.put("/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;
  post.timestamp = new Date();

  res.json(post);
});

// ✅ DELETE a post
router.delete("/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  const deleted = posts.splice(index, 1);
  res.json({ message: "Post deleted", post: deleted[0] });
});

module.exports = router;
