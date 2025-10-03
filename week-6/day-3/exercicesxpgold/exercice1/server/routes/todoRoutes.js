const express = require("express");
const router = express.Router();
const { getAllTodos, getTodoById } = require("../controllers/todoController");

router.get("/", getAllTodos);
router.get("/:id", getTodoById);

module.exports = router;
