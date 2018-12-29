const fs = require('fs');

const rs = fs.createReadStream('./watch.js');

rs.pipe(process.stdout);