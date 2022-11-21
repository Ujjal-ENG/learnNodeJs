const express = require("express");
const app = express();

app.get("/products:id([0-9]{3})", (req, res) => {
  res.send(`<h1> ID = ${req.params.id} </h1>`);
});

app.get("/products:title([a-zA-Z]{3})", (req, res) => {
  res.send(`<h1> ID = ${req.params.title} </h1>`);
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "Not a Valid Route",
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
