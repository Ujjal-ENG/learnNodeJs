const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use((req, res, next) => {
  res.send("<h1> 404!! This is the bad url request..</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
