const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./debug.js').then(data => {
//   console.log(data.toString());
// }).catch(err => {
//   console.error(err);
// });

async function test () {
  try {
    const content = await read('./watch.jss');
    console.log(content.toString());
  } catch (error) {
    console.log(error);
  }
}

test();