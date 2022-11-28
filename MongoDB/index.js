const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 4000;

// mongoose
//   .connect("mongodb://localhost:27017/testProductDB")
//   .then(() => {
//     console.log("Database is Connected Successfully");
//   })
//   .catch((error) => {
//     console.log("Database is not connected");
//     console.log(error);
//     process.exit(1);
//   });

//create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//create Schema Model
const Product = mongoose.model("Products", productsSchema);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Database is connected");
  } catch (error) {
    console.log("Database is not connected");
    console.log(error);
    process.exit(1);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome To home page</h1>");
});

//create data in mongodb database
app.post("/products", async (req, res) => {
  try {
    //get data from request body
    const { title, price, description } = req.body;
    const newProduct = new Product({
      title: title,
      price: price,
      description: description,
    });
    const productData = await newProduct.save();

    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//get products and show
app.get("/products", async (req, res) => {
  try {
    const price = req.query.price;
    let products;
    if (price) {
      products = await Product.find({ price: { $gt: price } })
        .limit()
        .sort({ price: 1 });
    } else {
      products = await Product.find().limit();
    }

    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).send({
        message: "products not found",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//product serching using id
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      _id: id,
    });
    if (product) {
      res.status(200).send({
        success: true,
        message: "return single product",
        data: product,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
});


//delete data from database



app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});
