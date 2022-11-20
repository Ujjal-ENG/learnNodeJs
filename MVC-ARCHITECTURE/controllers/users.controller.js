const users = require("../models/users.model");
const path = require("path");

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUser = (req, res) => {
  const { name, age } = req.body;
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};
