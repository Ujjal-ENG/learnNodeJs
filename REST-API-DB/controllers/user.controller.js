const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "all users",
  });
};

const getOneUser = (req, res) => {
  res.status(200).json({
    message: "get one user",
  });
};

const createUsers = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUsers = (req, res) => {
  res.status(200).json({
    message: "User is created",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "Selected user is deleted",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUsers,
  updateUsers,
  deleteUser,
};
