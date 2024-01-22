const fs = require('fs');

fs.mkdir('./06-build-page/project-dist', { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
})

// fs.copyFile('./06-build-page/template.html', './06-build-page/project-dist/index.html', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.readFile('./06-build-page/template.html', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  let tag = ''
})

fs.readdir('./06-build-page/components', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  }
  else {
    files.forEach(file => {
      let tag = file.name.replace('.html', '');
      fs.readFile(`${file.path}/${file.name}`, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          fs.readFile('./06-build-page/project-dist/index.html', 'utf8', (error, info) => {
            if (error) {
              console.log(error);
            } else {
              let res = info.replace(`{{${tag}}}`, `${data}`);
              console.log(res);
              fs.writeFile('./06-build-page/project-dist/index.html', res, 'utf8', (err) => {
                if (err) {
                  console.log(err);
                }
              });
            }
          })
        }
      })
    })
  }
})



