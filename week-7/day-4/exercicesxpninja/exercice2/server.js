const express = require('express');
const cors = require('cors'); // to allow requests from React

const app = express();
app.use(cors());  // enable CORS for all routes

const PORT = 5000; // backend port

// Customer data
const customers = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Doe" },
  { id: 3, firstName: "Ziv", lastName: "Chen" },
  { id: 4, firstName: "Isaac", lastName: "Groisman" },
  { id: 5, firstName: "Avner", lastName: "Maman" },
  { id: 6, firstName: "Megan", lastName: "Dreyfuss" }
];

// GET route
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));