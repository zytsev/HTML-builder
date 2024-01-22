const fs = require('fs');
//const path = require('path');

fs.readdir('./03-files-in-folder/secret-folder', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  }
  else {
    files.forEach(file => {
      fs.stat(`${file.path}/${file.name}`, (err, stats) => {
        if (err) {
          console.log(err);
        } else if (file.isFile()) {
          console.log(`${file.name.replace('.', ' - ')} - ${stats.size}b`);
        }
      });
    });
  }
})

