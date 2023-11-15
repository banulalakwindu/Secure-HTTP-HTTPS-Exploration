// Import the required modules
const express = require("express");
const https = require("https");
const fs = require("fs");

// Create an express app
const app = express();
// Define a port
const port = 3000;

// Load SSL certificates
const privateKey = fs.readFileSync("server.key", "utf8");
const certificate = fs.readFileSync("server.cert", "utf8");
const credentials = { key: privateKey, cert: certificate };

// Define a simple HTTPS endpoint
app.get("/", (req, res) => {
  res.send("Hello, this is an HTTPS endpoint!");
});

// Create an HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
