const fs = require('fs');
const path = require('path');


function createBundle(err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('./05-merge-styles/project-dist/bundle.css', `${data}`, () => { })
  }
}


fs.readdir('./05-merge-styles/styles', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  }
  else {
    files.forEach(file => {
      if (file.isFile() && path.extname(`${file.name}`) === '.css') {
        fs.readFile(`${file.path}/${file.name}`, 'utf8', createBundle)
      }
    });
  }
})
