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
    required: [true, "Product title is must be required"],
    minlength: [3, "minimum length of the product title shoud be 3"],
    lowercase: true,
    trim: true,
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
app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    if (product) {
      res.status(200).send({
        success: true,
        message: "deleted single product",
        data: product,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "product was not deleted with this command id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

//update the product infromation
app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: title,
          description: description,
          price: price,
        },
      },
      {
        new: true,
      }
    );
    if (updatedProduct) {
      res.status(200).send({
        success: true,
        message: "updated single specific product",
        data: updatedProduct,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Item is not updated",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});
