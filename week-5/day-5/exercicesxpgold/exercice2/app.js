const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET_KEY = "mySecretKey"; // ⚠️ utiliser .env pour un vrai projet

app.use(express.json());

// Fake DB (in-memory)
let users = [
  // Exemple d'utilisateur pré-rempli
  { id: 1, username: "admin", password: "$2b$10$6kE8zZHLQ1Yp4vGnRk5s0u9Zz/wTLkhj0n5Uq8Xf6rYtJzG1qkRhy", role: "admin" } 
  // mot de passe: admin123
];

// ======================= ROUTES =======================

// ✅ REGISTER
app.post("/api/register", async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Missing data" });

  // Vérifier si l'utilisateur existe déjà
  if (users.some(u => u.username === username)) {
    return res.status(409).json({ message: "Username already taken" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword, role: role || "user" };
  users.push(newUser);

  res.status(201).json({ message: "User registered", userId: newUser.id });
});

// ✅ LOGIN
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

// ✅ PROFILE (Protected)
app.get("/api/profile", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Profile data", user: decoded });
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
});

// ======================= BONUS: Example Role-based Route =======================
app.get("/api/admin", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Access denied" });
    res.json({ message: "Welcome Admin!" });
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
});

// ======================= START SERVER =======================
app.listen(PORT, () => console.log(`🔐 User Login API running on http://localhost:${PORT}`));
