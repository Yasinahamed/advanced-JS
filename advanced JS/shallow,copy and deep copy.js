//Shallow Copy
const original = {
    name: "John",
    details: {
      age: 25,
      address: "123 Street"
    }
  };
  
  const shallowCopy = Object.assign({}, original);
  
  shallowCopy.details.age = 30;
  
  console.log(original.details.age); // Output: 30
  console.log(shallowCopy.details.age); // Output: 30

// Shallow Copy using Spread Operator
const arr = [1, 2, { a: 10 }];
const shallowCopyArr = [...arr];

shallowCopyArr[2].a = 20;

console.log(arr[2].a); // Output: 20
console.log(shallowCopyArr[2].a); // Output: 20

//Deep Copy
let ori = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 10;

console.log(original.b.c);  // Output: 2
console.log(deepCopy.b.c);  // Output: 10

//Using a Recursive Function for Deep Copy:
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    let copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }
  
  let OG = { a: 1, b: { c: 2 } };
  let deepCopy = deepClone(original);
  
  deepCopy.b.c = 10;
  
  console.log(OG.b.c);  // Output: 2
  console.log(deepCopy.b.c);  // Output: 10

  