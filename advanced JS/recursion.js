//Simple Recursion - Factorial
function factorial(n) {
    // Base case: when n is 0, return 1
    if (n === 0) {
      return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));  // Output: 120

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(6));  // Output: 8

//Tower of Hanoi
function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
  }
  
  towerOfHanoi(3, 'A', 'C', 'B');
  
//Recursion with Memoization
function fibonacciMemo() {
    const memo = {};
  
    function fib(n) {
      if (n <= 1) return n;
      if (memo[n]) return memo[n];
      
      memo[n] = fib(n - 1) + fib(n - 2);
      return memo[n];
    }
  
    return fib;
  }
  
  const fib = fibonacciMemo();
  console.log(fib(6));  // Output: 8

//Recursive Directory Traversal
const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      console.log(`Directory: ${filePath}`);
      traverseDirectory(filePath);  // Recursively traverse subdirectories
    } else {
      console.log(`File: ${filePath}`);
    }
  });
}

traverseDirectory('./testDirectory');

//Recursive Descent Parsing
function parseExpression(expression) {
    function parseTerm() {
      let number = '';
      while (expression.length && /[0-9]/.test(expression[0])) {
        number += expression[0];
        expression = expression.slice(1);
      }
      return parseInt(number, 10);
    }
  
    function parseAddSub() {
      let term = parseTerm();
      while (expression.length && /[+-]/.test(expression[0])) {
        const operator = expression[0];
        expression = expression.slice(1);
        const nextTerm = parseTerm();
        if (operator === '+') term += nextTerm;
        if (operator === '-') term -= nextTerm;
      }
      return term;
    }
  
    return parseAddSub();
  }
  
  console.log(parseExpression('10+20-5'));  // Output: 25
  