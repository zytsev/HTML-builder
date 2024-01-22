const fs = require('fs');

fs.mkdir('./04-copy-directory/files-copy', { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
})

fs.readdir('./04-copy-directory/files', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  }
  else {
    files.forEach(file => {
      fs.copyFile(`${file.path}/${file.name}`, `./04-copy-directory/files-copy/${file.name}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
})