const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route not found error
app.use((req, res, next) => {
  res.send("<h1>404!! This is the wrong route");
});

//server not found error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broke",
  });
});
module.exports = app;
