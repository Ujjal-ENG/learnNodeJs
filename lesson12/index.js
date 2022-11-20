const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("MiddleWare Function");
  req.currentTime = new Date(Date.now());
  next();
};
app.use(myMiddleWare);

app.use((req, res, next) => {
  res.send("<h1>404 ... THis is bad URL or Not valid route request</h1>");
});

app.get("/", (req, res) => {
  console.log("I am Home Route" + req.currentTime);
  res.send(`<h1> This is Home Page </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
});
