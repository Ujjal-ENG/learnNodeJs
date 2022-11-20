const http = require("http");
const fs = require("fs");
const PORT = precess.end.PORT;

const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("inde.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("contact.html", 200, req, res);
  } else {
    handleReadFile("error.html", 404, req, res);
  }
});

myServer.listen(PORT, () => {
  console.log("server is running");
});
