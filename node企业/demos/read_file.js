const fs = require('fs');

fs.readFile('./main.js', 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
})

const data = fs.readFileSync('./argv.js', 'utf-8');
console.log(data);