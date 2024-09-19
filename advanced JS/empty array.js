const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // Output: 3

fruits.push('date');
console.log(fruits.length); // Output: 4

const user = {
    profile: {
      name: 'Alice',
      address: {
        city: 'Wonderland'
      }
    }
  };
  
  console.log(user.profile?.address?.city); // Output: 'Wonderland'
  console.log(user.profile?.contact?.email); // Output: undefined


  const car = {
    make: 'Toyota',
    model: 'Camry'
  };
  
  console.log('make' in car); // Output: true
  console.log('year' in car); // Output: false
  
  console.log(car.hasOwnProperty('model')); // Output: true
  console.log(car.hasOwnProperty('color')); // Output: false
  
  
  const auser = {
    profile: {
      name: 'Bob'
      // address is missing
    }
  };
  
  // Accessing a deeply nested property with default value
  const city = auser.profile?.address?.city ?? 'Unknown City';
  console.log(city); // Output: 'Unknown City'
  
  // Accessing an existing property with default value
  const name = auser.profile?.name ?? 'Anonymous';
  console.log(name); // Output: 'Bob'

  