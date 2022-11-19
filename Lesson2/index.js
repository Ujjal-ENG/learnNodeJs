const fs = require("fs");

fs.appendFile("demo1.txt", "I am 24 years old", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successful')
  }
});
