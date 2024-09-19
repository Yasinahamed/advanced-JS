const R = require('ramda');

// Functions to be piped
const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const square = x => x * x;

// Create a pipeline
const processNumber = R.pipe(
  multiplyBy2,
  add3,
  square
);

console.log(processNumber(2)); // Output: 49


const R = require('ramda');

// Functions to be composed
const cmultiplyBy2 = x => x * 2;
const cadd3 = x => x + 3;
const csquare = x => x * x;

// Create a composition
const cprocessNumber = R.compose(
  csquare,
  cadd3,
  cmultiplyBy2
);

console.log(cprocessNumber(2)); // Output: 49

const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const add5 = x => x + 5;
const amultiplyBy2 = x => x * 2;
const subtract3 = x => x - 3;

const calculate = pipe(add5, amultiplyBy2, subtract3);

console.log(calculate(10)); // Output: 27


const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const greet = str => `Hello, ${str}`;

const shoutGreeting = compose(exclaim, toUpperCase, greet);

console.log(shoutGreeting('world')); // Output: "HELLO, WORLD!"

