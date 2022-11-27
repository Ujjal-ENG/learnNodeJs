const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 4000;

mongoose
  .connect("mongodb://localhost:27017/testProductDB")
  .then(() => {
    console.log("Database is Connected Successfully");
  })
  .catch((error) => {
    console.log("Database is not connected");
    console.log(error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome To home page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
