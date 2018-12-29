const fs = require('fs');

fs.watch('./', {recursive: true},(event, fileName) => {
  console.log(event, fileName);
});

