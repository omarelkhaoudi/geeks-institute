const express = require("express");
const app = express();
const PORT = 3000;

// Import router
const routes = require("./routes/index");

// Mount the router
app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
