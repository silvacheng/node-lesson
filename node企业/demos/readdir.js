const fs = require('fs');

// fs.readdir('./', (err, files) => {
//   if(err) throw err;
//   console.log(files); 
// })

fs.readdir(process.cwd(), (err, files) => {
  if(err) throw err;
  console.log(files); 
})