//Basic Currying
function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  console.log(add(1)(2)(3));  // Output: 6

  //Generalizing Currying
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);  // Base case: if all arguments are supplied, call the original function
      } else {
        return function(...newArgs) {
          return curried.apply(this, [...args, ...newArgs]);  // Recursive case: gather the arguments
        };
      }
    };
  }
  
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  const curriedMultiply = curry(multiply);
  console.log(curriedMultiply(2)(3)(4));  // Output: 24

  //Currying for Reusability
  function format(locale) {
    return function(date) {
      return new Intl.DateTimeFormat(locale).format(date);
    };
  }
  
  const formatUS = format('en-US');
  const formatDE = format('de-DE');
  
  console.log(formatUS(new Date()));  // Output: MM/DD/YYYY (US format)
  console.log(formatDE(new Date()));  // Output: DD.MM.YYYY (German format)

  //Currying with Arrow Functions
  const add = a => b => c => a + b + c;

console.log(add(5)(10)(15));  // Output: 30

//Currying in Event Handling
function log(level) {
    return function(message) {
      console.log(`[${level}] ${message}`);
    };
  }
  
  const errorLog = log('ERROR');
  const infoLog = log('INFO');
  
  errorLog('This is an error');   // Output: [ERROR] This is an error
  infoLog('This is an info log'); // Output: [INFO] This is an info log

  //Currying with IIFE (Immediately Invoked Function Expression)
  const multiply = (function (a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  })(2);
  
  console.log(multiply(3)(4));  // Output: 24
  
  //Currying for Function Composition
  const compose = f => g => x => f(g(x));

const double = x => x * 2;
const increment = x => x + 1;

const doubleThenIncrement = compose(increment)(double);

console.log(doubleThenIncrement(5));  // Output: 11
