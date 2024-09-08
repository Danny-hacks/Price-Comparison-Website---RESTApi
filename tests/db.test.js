const mysql = require("mysql2");
const { query } = require("../database/db"); // Adjust the path as necessary

// Creating a MySQL connection pool for the test
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // Replace with your database password
  database: "bookmatch", // Replace with your database name
  connectionLimit: 10,
});

// Test suite for the database connection
describe("Database Connection Tests", () => {
  let connection;

  beforeAll((done) => {
    pool.getConnection((err, conn) => {
      if (err) {
        done.fail(err);
        return;
      }
      connection = conn;
      done();
    });
  });

  afterAll((done) => {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
    // Close the MySQL connection pool
    pool.end(done); // Use done callback to ensure Jest exits after pool is closed
  });

  // Test case: should establish a database connection
  it("should establish a database connection", () => {
    expect(connection).toBeDefined();
    expect(connection.threadId).not.toBeNull(); // Assuming connection object has threadId
  });

  // Test case: should execute SQL query successfully
  it("should execute SQL query successfully", async () => {
    const sql = "SELECT * FROM books"; // Example SQL query
    const results = await query(sql);

    // Assertions
    expect(results).toBeDefined();
    expect(Array.isArray(results)).toBeTruthy();
  });

  // Test case: should handle errors during query execution
  it("should handle errors during query execution", async () => {
    const sql = "SELECT * FROM non_existing_table"; // SQL query that generates an error
    await expect(query(sql)).rejects.toThrow();
  });
});
