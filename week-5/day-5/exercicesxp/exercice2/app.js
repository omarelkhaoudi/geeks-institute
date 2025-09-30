// app.js
const express = require("express");
const app = express();
const PORT = 5000;

// ✅ Middleware pour lire le JSON dans les requêtes
app.use(express.json());

// 📚 Données simulées (comme une base de données)
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
];

// ✅ READ ALL - GET /api/books
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

// ✅ READ ONE - GET /api/books/:bookId
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// ✅ CREATE - POST /api/books
app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  // Vérifier que les champs nécessaires sont présents
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "Please provide title, author, and publishedYear" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// 🚀 Démarrer le serveur
app.listen(PORT, () => {
  console.log(`📚 Book API running on http://localhost:${PORT}`);
});
