//Simple Pure Function
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3));  // Output: 5
  console.log(add(2, 3));  // Output: 5 (same input, same output)

//Pure Function with Arrays
function doubleArray(arr) {
    return arr.map(num => num * 2);
  }
  
  const numbers = [1, 2, 3];
  console.log(doubleArray(numbers));  // Output: [2, 4, 6]
  console.log(numbers);  // Output: [1, 2, 3] (original array remains unchanged)
  
//Impure Function (For Comparison)
let counter = 0;

function incrementCounter() {
  counter += 1;
  return counter;
}

console.log(incrementCounter());  // Output: 1
console.log(incrementCounter());  // Output: 2 (different outputs with the same input)

//Pure Function with Object Inputs
function updateAge(person, newAge) {
    return { ...person, age: newAge };
  }
  
  const person = { name: "John", age: 30 };
  const updatedPerson = updateAge(person, 35);
  
  console.log(updatedPerson);  // Output: { name: 'John', age: 35 }
  console.log(person);  // Output: { name: 'John', age: 30 } (original object unchanged)

  
//Pure Function Using Recursion
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));  // Output: 120
  console.log(factorial(5));  // Output: 120 (same input, same output)

