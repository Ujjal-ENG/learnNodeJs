const express = require("express");
const app = express();
const PORT = 3001;
//Route Parameter
app.get("/userid/:id/userAge/:age", (req, res) => {
  const { id, age } = req.params;
  res.send(`Student id is: ${id} and age is ${age}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
