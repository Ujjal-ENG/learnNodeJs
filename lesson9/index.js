const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//Route Parameter
// app.get("/userid/:id/userAge/:age", (req, res) => {
//   const { id, age } = req.params;
//   res.send(`Student id is: ${id} and age is ${age}`);
// });

app.post("/register", (req, res) => {
  const { fullName, age } = req.body;
  if (age > 22) {
    res.send(`<h1> Hey!! ${fullName} and your age is ${age}`);
  } else {
    res.send("<h1> You are not perfectly matured");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
