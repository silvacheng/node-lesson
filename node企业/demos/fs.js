const fs = require('fs');

fs.readFile('./main.js', (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});