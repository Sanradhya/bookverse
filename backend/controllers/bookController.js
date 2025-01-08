const Book = require('../models/Book');

const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.json(books);
};

const addBook = async (req, res) => {
  const { title, author, price, category } = req.body;
  const book = new Book({ title, author, price, category });
  const savedBook = await book.save();
  res.json(savedBook);
};

module.exports = { getBooks, addBook };
