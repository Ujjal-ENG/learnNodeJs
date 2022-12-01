const express = require("express");
const app = express();

const userRouter = require("./routes/users.route");

const loginRouter = require("./routes/login.route");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(loginRouter);

app.use((req, res, next) => {
  res.send("<h1>404::BAD REQUEST</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
