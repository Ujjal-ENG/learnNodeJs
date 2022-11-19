const http = require("http");

const port = 3000;
const hostName = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  console.log("Server Successfully on Mannnn...");
  res.end("<h1>Ujjal</h1>");
});

myServer.listen(port, hostName, () => {
  console.log(`My server is running at http://${hostName}:${port} `);
});
