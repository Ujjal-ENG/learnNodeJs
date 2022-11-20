const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.post("/triangle", (req, res) => {
  const { base: a, height: b, width: c } = req.body;
  const areaCal =
    0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c)).toFixed(2);

  res.send(`The Triangle Area is: ${areaCal}`);
  res.end();
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const areaCal = Math.PI * (radius * radius).toFixed(2);
  res.send(`The Cricle Area is: ${areaCal}`);
});
