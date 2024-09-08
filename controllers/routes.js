const express = require("express");
const router = express.Router();

// Import the database utility
const db = require("../database/db");
const { getSearchCount, search } = require("../utils");

// Route to perform a search based on query parameters
router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const offset = parseInt(req.query.offset) || 0;
    const numItems = parseInt(req.query.numitems) || 8;

    // Check if parameters exist
    if (!searchTerm) {
      return res.json({ error: "Missing search term" });
    }

    // Get the total number of search items for pagination
    let searchCount = await getSearchCount(searchTerm);

    // Get search items
    let searchResults = await search(searchTerm, numItems, offset);

    // Combine into a single object
    const results = {
      count: searchCount,
      data: searchResults,
    };
    res.json({ results });
  } catch (error) {
    console.error("Error while searching", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch details of a specific book by ID
router.get("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookQuery = `
      SELECT b.*, cp.price, cp.image_urls, cp.urls, cp.retailer
      FROM books b
      INNER JOIN compare_prices cp ON b.id = cp.books_id WHERE b.id=?
    `;
    const book = await db.query(bookQuery, [bookId]);

    if (book.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    const results = {
      book: book[0],
    };
    res.json({ results });
  } catch (error) {
    console.error(`Error fetching product with id:${req.params.id}`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to compare details of a specific product by title
router.get("/compare", async (req, res) => {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const bookQuery = `
      SELECT * FROM books
      WHERE title LIKE ?
    `;
    const comparisonQuery = `
      SELECT * FROM compare_prices
      WHERE books_id IN (
        SELECT id FROM books WHERE title LIKE ?
      )
    `;

    const book = await db.query(bookQuery, [`%${title}%`]);
    const comparison = await db.query(comparisonQuery, [`%${title}%`]);

    const results = {
      book,
      comparison,
    };

    res.json({ results });
  } catch (error) {
    console.error(`Error fetching product with title:${title}`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch all books
router.get("/all-books", async (req, res) => {
  try {
    const books = await db.query(
      `SELECT b.*, cp.price, cp.image_urls, cp.urls, cp.retailer
      FROM books b
      INNER JOIN compare_prices cp ON b.id = cp.books_id`
    );
    res.json({ results: books });
  } catch (error) {
    console.error("Error fetching all books", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
