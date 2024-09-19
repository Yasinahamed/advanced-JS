const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
}


const dayNames = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };
  
  const adayOfWeek = 3;
  console.log(dayNames[adayOfWeek]); // Output: 'Wednesday'
  

  const dayMap = new Map([
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
    [7, 'Sunday']
  ]);
  
  const mdayOfWeek = 3;
  console.log(dayMap.get(mdayOfWeek)); // Output: 'Wednesday'
  

  // Object Example
const obj = {
    a: 1,
    b: 2
  };
  
  for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2
  }
  
  // Map Example
  const map = new Map([
    ['a', 1],
    ['b', 2]
  ]);
  
  map.forEach((value, key) => {
    console.log(key, value); // Output: a 1, b 2
  });
  