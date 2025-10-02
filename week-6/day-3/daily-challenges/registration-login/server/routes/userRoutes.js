const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
