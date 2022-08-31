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
