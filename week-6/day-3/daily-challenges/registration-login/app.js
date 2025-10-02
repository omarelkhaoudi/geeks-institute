const express = require("express");
const cors = require("cors");
const userRoutes = require("./server/routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
