const express = require("express");
const cors = require("cors");
const postRoutes = require("./server/routes/postRoutes"); // adjust path if needed

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mount the routes
app.use("/api/posts", postRoutes); // <- This is important

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
