
const {argv, argv0, execArgv, execPath} = process;

argv.forEach(element => {
  console.log(element);
});