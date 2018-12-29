const EventEmiter = require('events');

class CustomEvent extends EventEmiter {

}

const ce = new EventEmiter();

// ce.on('test', () => {
//   console.log('This is a test');
// });

// setInterval(() => {
//   ce.emit('test');
// }, 1000)

ce.on('error', (err, time) => {
  console.log(err);
  console.log(time);
})

ce.emit('error', new Error('出错了～'), Date.now());