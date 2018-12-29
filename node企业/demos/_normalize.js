const {normalize, sep, delimiter, win32, posix} = require('path');

// console.log(normalize('/usr//local/bin'));

console.log('sep:', sep);

console.log('PATH:', process.env.PATH);

console.log('delimiter:', delimiter);
console.log('win32:', win32);
console.log('posix:', posix);


