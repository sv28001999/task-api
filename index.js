const mod = require("./second");
const os = require('os');
const fs = require('fs');
const EventEmmiter = require('events');

class MyEmmiter extends EventEmmiter { };

const myEmmiter = new MyEmmiter();

myEmmiter.on('Break', () => {
    console.log("Take a break");
});

myEmmiter.on('Water', () => {
    setTimeout(() => {
        console.log("Drink Water!");
    }, 2000);
});

myEmmiter.emit('Break');
myEmmiter.emit('Water');

// console.log("Hello World");
// console.log(mod);
// console.log(exports, "\n", require, "\n\n\n", module, "\n", __dirname, "\n", __filename);

// console.log(os.freemem());

// fs.readFile('notes.txt', 'utf8', (error, data) => {
//     if (error)
//         console.log(error);
//     else
//         console.log(data);
// });

// console.log(fs.readFileSync('notes.txt').toString());

// console.log("-------File reading completed-------");

// fs.writeFile('notes.txt', 'Hello World!!!\nI am shivam vishwakarma', (error, data) => {
//     if (error)
//         console.log(error);
//     else
//         console.log(data);
// });

