const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This s hom page");
});

app.post("/", (res, req) => {
  res.send("this is home page with post request");
});

app.listen(3001, () => {
  console.log("istening on port 3000");
});
