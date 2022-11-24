const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB atlas is connected");
  })
  .catch((err) => {
    console.log("problkem", err);
    process.exit(1);
  });
