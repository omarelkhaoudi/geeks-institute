const books = require("../models/bookModel");

// Read all books
const getAllBooks = (req, res) => {
  res.json(books);
};

// Read a single book by ID
const getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
};

// Create a new book
const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Update a book
const updateBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author, publishedYear } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.publishedYear = publishedYear || book.publishedYear;

  res.json(book);
};

// Delete a book
const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
