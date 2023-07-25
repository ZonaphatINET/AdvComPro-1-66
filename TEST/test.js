const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function trimTrailingZeros(inputString) {
  return parseFloat(inputString).toString();
}

rl.question('Enter a string: ', (inputString) => {
  const trimmedString = trimTrailingZeros(inputString);
  console.log(`The input string is ${inputString} output is ${trimmedString}`);
  rl.close();
});