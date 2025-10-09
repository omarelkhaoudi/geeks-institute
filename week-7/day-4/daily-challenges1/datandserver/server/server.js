const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// GET route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

// POST route (Part II)
app.post('/api/world', (req, res) => {
  console.log('Received body:', req.body);
  const userInput = req.body.input;
  res.send({ message: `I received your POST request. This is what you sent me: ${userInput}` });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
