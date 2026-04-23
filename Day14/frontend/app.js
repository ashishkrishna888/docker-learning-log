const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Frontend running");
});

server.listen(3000, () => {
  console.log("Frontend running on port 3000");
});