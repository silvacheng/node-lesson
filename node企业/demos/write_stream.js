const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const timer = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  console.log(num);
  if(num > 3) {
    ws.write(num + '');
  } else {
    clearInterval(timer);
    ws.end();
  }
}, 200);


ws.on('finish', () => {
  console.log('done!');
});