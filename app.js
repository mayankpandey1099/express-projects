const express = require('express');
const app = express();

// First Middleware: Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});

// Second Middleware: Request Header middleware
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express.js');
  next(); // Pass control to the next middleware
});

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello to Node.js</h1>');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
