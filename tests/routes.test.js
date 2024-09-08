const request = require("supertest");
const app = require("../app"); // Adjust the path as necessary

// Test suite for the search route
describe("GET /search", () => {
  // Test case: should perform a search and return results
  it("should perform a search and return results", async () => {
    const response = await request(app).get(
      "/api/search?q=love&offset=0&numitems=10"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });

  // Test case: should handle missing search term
  it("should handle missing search term", async () => {
    const response = await request(app).get("/api/search");
    expect(response.statusCode).toBe(200); // Assuming you handle missing term gracefully with a status 200
    expect(response.body.error).toBe("Missing search term");
  });
});

// Test suite for the product details route
describe("GET /books/:id", () => {
  // Test case: should fetch details of a specific product by ID
  it("should fetch details of a specific product by ID", async () => {
    const response = await request(app).get("/api/books/123"); // Adjust ID as necessary
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });

  // Test case: should handle errors for non-existent product ID
  it("should handle errors for non-existent product ID", async () => {
    const response = await request(app).get("/api/books/9999"); // Assuming 9999 doesn't exist
    expect(response.statusCode).toBe(404); // Adjust as per your error handling
    expect(response.body.error).toBe("Product not found");
  });
});

// Test suite for the product comparison route
describe("GET /compare", () => {
  // Test case: should compare details of a specific product by title
  it("should compare details of a specific product by title", async () => {
    const response = await request(app).get("/api/compare?title=love");
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });

  // Test case: should handle missing title query parameter
  it("should handle missing title query parameter", async () => {
    const response = await request(app).get("/api/compare");
    expect(response.statusCode).toBe(400); // Assuming you return 400 for missing parameter
    expect(response.body.error).toBe("Title query parameter is required");
  });
});

// Test suite for fetching all books route
describe("GET /all-books", () => {
  // Test case: should fetch all books
  it("should fetch all books", async () => {
    const response = await request(app).get("/api/all-books");
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });
});
