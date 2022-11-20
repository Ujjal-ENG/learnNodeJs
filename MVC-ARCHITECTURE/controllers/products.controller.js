const products = require("../models/products.model");
const path = require("path");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/products.html"));
};

exports.saveProducts = (req, res) => {
  const { name, price } = req.body;
  const product = {
    name,
    price,
  };
  products.push(product);
  res.status(200).json({
    success: true,
    products,
  });
};
