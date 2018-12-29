module.exports.test = 'B';

const modA = require('./module01');

console.log('modB', modA.test);

module.exports.test = 'BB';