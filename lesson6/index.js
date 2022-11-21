const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    console.log("kop mama error khaiya gese");
  }
});

myServer.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
