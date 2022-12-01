const users = require("../models/users.model");
const path = require("path");

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/signup.html"));
};

exports.saveUser = (req, res) => {
  const { firstname,lastname,phonenumber,email,password } = req.body;
  const user = {
    firstname,lastname,phonenumber,email,password 
  };
  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};
