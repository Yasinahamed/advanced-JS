//Basic Throttling Function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
  
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        if (lastFunc) {
          clearTimeout(lastFunc);
        }
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  // Usage
  const logScroll = () => {
    console.log('Scroll event:', new Date());
  };
  
  const throttledScroll = throttle(logScroll, 1000);
  
  window.addEventListener('scroll', throttledScroll);

//Throttling Search Input
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
  
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        if (lastFunc) {
          clearTimeout(lastFunc);
        }
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  // Simulating a search function
  const performSearch = (query) => {
    console.log('Searching for:', query);
  };
  
  // Create a throttled version of the search function
  const throttledSearch = throttle(performSearch, 500);
  
  const searchInput = document.getElementById('search');
  
  searchInput.addEventListener('input', (event) => {
    throttledSearch(event.target.value);
  });

//Throttling with requestAnimationFrame
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
  
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        if (lastFunc) {
          cancelAnimationFrame(lastFunc);
        }
        lastFunc = requestAnimationFrame(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        });
      }
    };
  }
  
  // Simulating an animation function
  const updateAnimation = () => {
    console.log('Updating animation:', new Date());
  };
  
  // Create a throttled version of the animation update function
  const throttledAnimationUpdate = throttle(updateAnimation, 1000);
  
  window.addEventListener('scroll', throttledAnimationUpdate);

  