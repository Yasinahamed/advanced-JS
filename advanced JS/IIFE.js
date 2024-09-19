//Basic Syntax of IIFE
(function() {
    // Code inside IIFE
    console.log("IIFE executed!");
  })();

//Basic IIFE
(function() {
    let message = "Hello from IIFE!";
    console.log(message);  // Output: "Hello from IIFE!"
  })();

//IIFE with Parameters
(function(a, b) {
    console.log(a + b);  // Output: 5
  })(2, 3);

//IIFE for Data Privacy
const counter = (function() {
    let count = 0;
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      }
    };
  })();
  
  console.log(counter.increment());  // Output: 1
  console.log(counter.increment());  // Output: 2
  console.log(counter.decrement());  // Output: 1

//IIFE with Async/Await
(async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  })();

//IIFE in Loops
for (var i = 0; i < 3; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);  // Output: 0, 1, 2
      }, 1000);
    })(i);
  }

//IIFE with Arrow Functions
(() => {
    console.log("IIFE with arrow function!");  // Output: "IIFE with arrow function!"
  })();
  