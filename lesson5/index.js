const getRandomFruitsName = require("random-fruits-name");

const run = () => {
  setTimeout(() => {
    console.log(getRandomFruitsName());
  }, 1000);
};
run();
