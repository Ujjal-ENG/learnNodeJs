const readline = require('node:readline');
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

input.on("line", (values) => {
  userInput.push(values);
});

input.on("close", () => {
  console.log(addvalues(userInput));
});

const addvalues = (data) => {
  var sum = 0;
  var num = data[0].split(" ");
  for (let i = 0; i < num.length; i++) {
    num[i] = parseInt(num[i]);
    sum += num[i];
  }
  return sum;
};
