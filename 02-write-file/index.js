const fs = require('fs');
const path = require('path');
const readline = require('node:readline');
const {
  stdin: input,
  stdout: output,
} = require('node:process');
const { text } = require('stream/consumers');
const rl = readline.createInterface({ input, output });

fs.appendFile('./02-write-file/txt.txt', '', () => {
  console.log('Hello! Write here:');
})

rl.on('line', (text) => {
  if (text === 'exit') {
    console.log("Thank you!");
    rl.close();
  } else {
    fs.appendFile('./02-write-file/txt.txt', `${text}\n`, () => {
    })
  }
})

rl.on('SIGINT', () => {
  console.log("Thank you!");
  rl.close();
})