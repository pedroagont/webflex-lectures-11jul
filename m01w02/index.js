const number = 10;
const name = 'Pedro 👨🏻‍🏫';

console.log(number, typeof number);
console.log(name, typeof name);

const myFunction = function() {
  console.log('Hello from myFunction! 👋');
};

myFunction();
console.log(typeof myFunction);

const sayHello = function(name) {
  console.log(`Hello ${name}! 👋`);
};

sayHello('Megan!');

//////////////////////////////////////////////////////

const runMyFunction = function(fn) {
  console.log('Running fn function...');
  fn();
};

const sayHi = function() {
  console.log('Hi! 👋');
};

const sumTwo = function(num) {
  console.log(num + 2);
};

// without arguments
runMyFunction(sayHi);

// with arguments
runMyFunction(function() {
  sumTwo(10);
});

// with arrow functions () => {};
runMyFunction(() => sumTwo(10));

function traditionalFunction1() {
  console.log('Hello from trad! 🦈');
}

const variableFunction = function() {
  console.log('Hello from variable! 🛼');
};

const arrowFunction = () => console.log('Hello from arrow shorter! 🏹');

////////////////////

const welcomeUser = (username, callback) => {
  callback(username);
};

const completeDataMessage = username => {
  console.log(`Welcome ${username}! Your profile is complete!`);
};

const missingDataMessage = username => {
  console.log(`Welcome ${username}! Your profile is missing some data!`);
};

welcomeUser('Sarah', completeDataMessage);
welcomeUser('Ernie', missingDataMessage);

// Higher order function
const mathOperation = (val1, val2, callback) => {
  return callback(val1, val2);
};

// Callbacks declaration
const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Invoking
const result = mathOperation(18, 15, divide);
console.log(result);
