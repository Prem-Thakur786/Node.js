const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Define a function to handle HTTP requests
const handleRequest = (req, res) => {
  // Set the status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Read the index.html file and send it as the response
  const indexPath = path.join(__dirname, 'index1.html');
  fs.readFile(indexPath, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.end(data);
    }
  });
};

// Create the HTTP server
const server = http.createServer(handleRequest);

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});