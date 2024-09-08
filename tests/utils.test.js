const { search, getSearchCount } = require("../utils");
const db = require("../database/db");

// Mock the database query function
jest.mock("../database/db", () => ({
  query: jest.fn(),
}));

describe("search function", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should generate correct SQL query and call db.query", async () => {
    const searchTerm = "love";
    const numItems = 10;
    const offset = 0;

    // Call the function
    await search(searchTerm, numItems, offset);

    // Checking if db.query is called with the correct SQL query
    expect(db.query).toHaveBeenCalledWith(
      `
    SELECT b.*, cp.price, cp.image_urls, cp.urls, cp.retailer
    FROM books b
    INNER JOIN compare_prices cp ON b.id = cp.books_id
    WHERE  b.title LIKE ? 
    LIMIT ? OFFSET ?
    `,
      [`%${searchTerm}%`, numItems, offset]
    );
  });

  it("should return search results", async () => {
    const mockResults = [{ id: 1, title: "love Book" }];
    db.query.mockResolvedValue(mockResults);

    const results = await search("love", 10, 0);

    expect(results).toEqual(mockResults);
  });

  it("should handle errors", async () => {
    const errorMessage = "Database error";
    db.query.mockRejectedValue(new Error(errorMessage));

    await expect(search("love", 10, 0)).rejects.toThrow(errorMessage);
  });
});

// Mock the database query function
jest.mock("../database/db", () => ({
  query: jest.fn(),
}));

describe("getSearchCount function", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should generate correct SQL query and call db.query", async () => {
    const searchTerm = "love";
    const mockResult = [{ count: 5 }]; // Mocked result for successful query

    // Mock successful db.query call
    db.query.mockResolvedValueOnce(mockResult);

    // Call the function
    const result = await getSearchCount(searchTerm);

    // Checking if db.query is called with the correct SQL query
    expect(db.query).toHaveBeenCalledWith(
      "SELECT COUNT(*) AS count FROM books WHERE title LIKE ?",
      [`%${searchTerm}%`]
    );

    // Verify the result
    expect(result).toBe(mockResult[0].count);
  });

  it("should handle errors", async () => {
    const searchTerm = "love";
    const errorMessage = "Database error";

    // Mock db.query to throw an error
    db.query.mockRejectedValueOnce(new Error(errorMessage));

    // Ensure the function throws the expected error
    await expect(getSearchCount(searchTerm)).rejects.toThrow(errorMessage);
  });
});
