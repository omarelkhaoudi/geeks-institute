const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");



// Corrected postRoutes.js
router.get("/", postController.getAllPosts); // GET /api/posts
router.get("/:id", postController.getPostById); // GET /api/posts/:id
router.post("/", postController.createPost); // POST /api/posts
router.put("/:id", postController.updatePost); // PUT /api/posts/:id
router.delete("/:id", postController.deletePost); // DELETE /api/posts/:id

module.exports = router;
