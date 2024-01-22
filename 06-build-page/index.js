
const path = require('path');

const fs = require('fs');
const fsPromises = require('fs').promises;



fs.mkdir('./06-build-page/project-dist', { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
})

fs.readdir('./06-build-page/assets', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  } else {
    files.forEach(file => {
      if (!file.isFile()) {
        fs.mkdir(`./06-build-page/project-dist/assets/${file.name}`, { recursive: true }, (err) => {
          if (err) {
            console.log(err);
          }
        })
      } else {
        fs.copyFile(`${path}/${file.name}`, `${dest}/${file.name}`, (err) => {
          if (err) {
            console.log(err);
          }
        })
      }
    })
  }
})

fs.promises.readFile('./06-build-page/template.html', 'utf8')
  .then((data) => {
    fs.promises.readdir('./06-build-page/components', { withFileTypes: true })
      .then((files) => {
        files.forEach(file => {
          let tag = file.name.replace('.html', '');
          fs.promises.readFile(`${file.path}/${file.name}`, 'utf8')
            .then((value) => {
              data = data.replace(`{{${tag}}}`, value);
              fs.promises.writeFile('./06-build-page/project-dist/index.html', data, 'utf8');
            })
        })
      })
  })




function createBundle(err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('./06-build-page/project-dist/style.css', `${data}`, () => { })
  }
}


fs.readdir('./06-build-page/styles', { withFileTypes: true }, (err, files) => {
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

// fs.mkdir('./06-build-page/project-dist/assets', { recursive: true });
// fs.mkdir('./06-build-page/project-dist/assets/fonts', { recursive: true });
// fs.mkdir('./06-build-page/project-dist/assets/img', { recursive: true });
// fs.mkdir('./06-build-page/project-dist/assets/svg', { recursive: true });



fs.readdir('./06-build-page/assets/fonts', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err)
  }
  else {
    files.forEach(file => {
      fs.promises.copyFile(`./06-build-page/assets/fonts/${file.name}`, `./06-build-page/project-dist/assets/fonts/${file.name}`)
    })
  }
})


// fs.readdir('./06-build-page/assets/img', { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     files.forEach(file => {
//       fs.copyFile(`${file.path}/${file.name}`, `./06-build-page/project-dist/assets/img/${file.name}`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     });
//   }
// })

// fs.readdir('./06-build-page/assets/svg', { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     files.forEach(file => {
//       fs.copyFile(`${file.path}/${file.name}`, `./06-build-page/project-dist/assets/svg/${file.name}`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     });
//   }
// })
