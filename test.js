const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    console.log('Error: Division by zero is not allowed.');
    process.exit();
  }
}

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operation (+, -, *, /): ', (operation) => {
      let result;
      switch(operation) {
        case '+':
          result = add(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case '-':
          result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case '*':
          result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        case '/':
          result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
          break;
        default:
          console.log('Error: Invalid operation.');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});
module.exports = { add };
