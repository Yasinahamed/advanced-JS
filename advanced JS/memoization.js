//Basic Memoization
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      
      console.log('Computing result:', key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  // Example function: Fibonacci
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(10)); // Computes and caches result
  console.log(memoizedFibonacci(10)); // Fetches result from cache
  
  //Advanced Memoization with Custom Key Functions
  function memoize(fn, keyFn = JSON.stringify) {
    const cache = new Map();
    
    return function(...args) {
      const key = keyFn(...args);
      
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      
      console.log('Computing result:', key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  // Example function: Exponential
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Custom key function
  const customKeyFn = (base, exponent) => `${base}-${exponent}`;
  
  const memoizedPower = memoize(power, customKeyFn);
  
  console.log(memoizedPower(2, 3)); // Computes and caches result
  console.log(memoizedPower(2, 3)); // Fetches result from cache

//Memoization with Function Arguments as Objects
function memoize(fn, keyFn = JSON.stringify) {
    const cache = new Map();
    
    return function(...args) {
      const key = keyFn(...args);
      
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      
      console.log('Computing result:', key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  // Example function: Object property extraction
  function extractFullName(person) {
    return `${person.firstName} ${person.lastName}`;
  }
  
  // Custom key function for object arguments
  const acustomKeyFn = (person) => JSON.stringify(person);
  
  const memoizedExtractFullName = memoize(extractFullName, acustomKeyFn);
  
  console.log(memoizedExtractFullName({ firstName: 'John', lastName: 'Doe' })); // Computes and caches result
  console.log(memoizedExtractFullName({ firstName: 'John', lastName: 'Doe' })); // Fetches result from cache

  //Memoization with Limited Cache Size
  function memoize(fn, limit = 10) {
    const cache = new Map();
    const keys = [];
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key);
      }
      
      if (keys.length >= limit) {
        const oldestKey = keys.shift();
        cache.delete(oldestKey);
      }
      
      console.log('Computing result:', key);
      const result = fn(...args);
      cache.set(key, result);
      keys.push(key);
      return result;
    };
  }
  
  // Example function: Simple computation
  function square(n) {
    return n * n;
  }
  
  const memoizedSquare = memoize(square, 3);
  
  console.log(memoizedSquare(2)); // Computes and caches result
  console.log(memoizedSquare(3)); // Computes and caches result
  console.log(memoizedSquare(4)); // Computes and caches result
  console.log(memoizedSquare(2)); // Fetches result from cache
  console.log(memoizedSquare(5)); // Computes and caches result, evicts oldest cache (2)

  
  
