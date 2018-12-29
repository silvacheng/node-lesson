module.exports.test = 'A';

const modB = require('./module02');

console.log('modA', modB.test);

module.exports.test = 'AA';