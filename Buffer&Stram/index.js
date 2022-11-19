const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const ourReadStream = fs.createReadStream(`${__dirname}/file.txt`);
  ourReadStream.pipe(res);
});

server.listen(3000);
console.log("listening on port 3000");

// ourReadStream.on("data", (chunk) => {
//   ourWriteStram.write(chunk);
// });

// ourReadStream.pipe(ourWriteStram);
