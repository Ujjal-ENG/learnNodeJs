// const path = require('path')
// const myPath = 'H:\NodeJs\index.js'

// console.log(path.parse(myPath))

// const os = require('os')
// console.log(os.cpus())

// const fs = require("fs");
// fs.writeFileSync("myFile.txt", "Hello Ujjal");
// fs.appendFileSync("myFile.txt", "How are you");
// const data = fs.readFile("DataforVoiceWise.txt", (err, data) => {
//   console.log(data.toString());
// });
// console.log("Hello");

const EventEmitter = require('events');

const emitter = new EventEmitter();

// raise an event

emitter.emit('bellRing')