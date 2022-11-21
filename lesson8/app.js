const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

app.use("/api/user/", userRouter);

app.get("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/", (req, res) => {
  res.statusCode = 303;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>404 !! Not a valid url</h1>");
});

module.exports = app;
