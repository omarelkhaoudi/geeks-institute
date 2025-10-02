const users = require("../models/users");
const { hashpwd, bcrypt } = require("../models/hashPwd");

// GET /users
const getAllUsers = (req, res) => res.json(users);

// GET /users/:id
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// PUT /users/:id
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });

  const { email, username, first_name, last_name } = req.body;
  user.email = email || user.email;
  user.username = username || user.username;
  user.first_name = first_name || user.first_name;
  user.last_name = last_name || user.last_name;

  res.json({ message: "User updated", user });
};

// POST /register
const registerUser = (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password required" });

  if (users.find(u => u.username === username))
    return res.status(400).json({ message: "Username already exists" });

  const id = users.length + 1;
  users.push({ id, email, username, first_name, last_name });

  const hashedPassword = bcrypt.hashSync(password, 10);
  hashpwd.push({ id, username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
};

// POST /login
const loginUser = (req, res) => {
  const { username, password } = req.body;
  const record = hashpwd.find(h => h.username === username);
  if (!record) return res.status(401).json({ message: "Invalid credentials" });

  const match = bcrypt.compareSync(password, record.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful" });
};

module.exports = { getAllUsers, getUserById, updateUser, registerUser, loginUser };
