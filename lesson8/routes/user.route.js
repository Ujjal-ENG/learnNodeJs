const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am a login request at home route");
  res.cookie("name", "ujjal");
  res.end();
});

module.exports = router;
