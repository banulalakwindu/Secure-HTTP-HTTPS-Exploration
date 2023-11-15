// Import express
const express = require("express");

// Create an express app
const app = express();
// Define a port
const port = 3000;

// Define a simple HTTP endpoint
app.get("/", (req, res) => {
  res.send("Hello, this is an HTTP endpoint!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
