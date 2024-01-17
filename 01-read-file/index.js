const fs = require('fs');
const path = require('path');
const link = path.join(__dirname, `text.txt`);
let stream = fs.createReadStream(link);

async function read() {
  stream.on('data', (data) =>
    console.log(data.toString()));
}
read();

