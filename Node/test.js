const path = require("path");

console.log("Using PATH module:");
console.log(`Hello from file ${path.basename(__filename)}`);
console.log(`Process args: ${process.argv}`)

const hello = "Hello from Node JS Variable!"
console.log("Hello, World")

console.log (`Printing variable hello: ${hello}`);

console.log ("directory name: " + __dirname);
console.log ("directory and file name: " + __filename);
