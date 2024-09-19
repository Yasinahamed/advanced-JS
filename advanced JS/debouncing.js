//Basic Debouncing Function
function debounce(func, delay) {
    let timerId;
    return function(...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Usage
  const logResize = () => {
    console.log('Window resized:', new Date());
  };
  
  const debouncedResize = debounce(logResize, 300);
  
  window.addEventListener('resize', debouncedResize);

//Debouncing Search Input
function debounce(func, delay) {
    let timerId;
    return function(...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Simulating a search function
  const performSearch = (query) => {
    console.log('Searching for:', query);
  };
  
  // Create a debounced version of the search function
  const debouncedSearch = debounce(performSearch, 500);
  
  const searchInput = document.getElementById('search');
  
  searchInput.addEventListener('input', (event) => {
    debouncedSearch(event.target.value);
  });

//Debouncing with requestAnimationFrame
function debounce(func, delay) {
    let timerId;
    let lastCallTime = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCallTime < delay) {
        if (timerId) {
          cancelAnimationFrame(timerId);
        }
        timerId = requestAnimationFrame(() => {
          lastCallTime = now;
          func.apply(this, args);
        });
      } else {
        lastCallTime = now;
        func.apply(this, args);
      }
    };
  }
  
  // Simulating an animation function
  const updateAnimation = () => {
    console.log('Updating animation:', new Date());
  };
  
  // Create a debounced version of the animation update function
  const debouncedAnimationUpdate = debounce(updateAnimation, 1000);
  
  window.addEventListener('scroll', debouncedAnimationUpdate);

  
  