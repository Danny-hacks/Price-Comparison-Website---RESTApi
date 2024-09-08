const db = require("./database/db");

/** Function that gets the total count of books from search term */
async function getSearchCount(searchTerm) {
  try {
    const sql = `SELECT COUNT(*) AS count FROM books WHERE title LIKE ?`;
    const results = await db.query(sql, [`%${searchTerm}%`]);
    return results[0].count;
  } catch (error) {
    console.error("Error getting search count:", error);
    throw error;
  }
}

/** Function that searches for books with search term */
async function search(searchTerm, numItems, offset) {
  try {
    const sql = `
    SELECT b.*, cp.price, cp.image_urls, cp.urls, cp.retailer
    FROM books b
    INNER JOIN compare_prices cp ON b.id = cp.books_id
    WHERE  b.title LIKE ? 
    LIMIT ? OFFSET ?
    `;
    const results = await db.query(sql, [`%${searchTerm}%`, numItems, offset]);
    return results;
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
}

module.exports = { getSearchCount, search };
