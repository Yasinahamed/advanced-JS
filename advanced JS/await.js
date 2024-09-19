//Error Handling with Async/Await
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Usage
  fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error in fetchData:', error));

// Sequential vs. Parallel Execution
async function getUserData(userId) {
    const user = await fetchData(`https://api.example.com/users/${userId}`);
    const posts = await fetchData(`https://api.example.com/users/${userId}/posts`);
    return { user, posts };
  }
  
  // Usage
  getUserData(1)
    .then(data => console.log(data))
    .catch(error => console.error('Error in getUserData:', error));

    async function getUserData(userId) {
        const userPromise = fetchData(`https://api.example.com/users/${userId}`);
        const postsPromise = fetchData(`https://api.example.com/users/${userId}/posts`);
        
        const [user, posts] = await Promise.all([userPromise, postsPromise]);
        return { user, posts };
      }
      
      // Usage
      getUserData(1)
        .then(data => console.log(data))
        .catch(error => console.error('Error in getUserData:', error));
// Handling Multiple Promises with Promise.allSettled

async function fetchAllData() {
    const urls = [
      'https://api.example.com/data1',
      'https://api.example.com/data2',
      'https://api.example.com/data3'
    ];
  
    const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  
    const results = await Promise.allSettled(fetchPromises);
  
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Data from ${urls[index]}:`, result.value);
      } else {
        console.error(`Error fetching ${urls[index]}:`, result.reason);
      }
    });
  }
  
  // Usage
  fetchAllData();
  

  //Retry Logic with Async/Await
  async function fetchWithRetry(url, retries = 3, delay = 1000) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        console.warn(`Retrying ${url}, attempts left: ${retries}`);
        await new Promise(res => setTimeout(res, delay));
        return fetchWithRetry(url, retries - 1, delay);
      } else {
        throw error;
      }
    }
  }
  
  // Usage
  fetchWithRetry('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error in fetchWithRetry:', error));

    //Using async/await with Generators
    function* fetchDataGenerator(urls) {
        for (const url of urls) {
          const response = yield fetch(url);
          const data = yield response.json();
          console.log(`Data from ${url}:`, data);
        }
      }
      
      async function runGenerator() {
        const urls = [
          'https://api.example.com/data1',
          'https://api.example.com/data2'
        ];
        
        const iterator = fetchDataGenerator(urls);
        
        for (const { value: promise } of iterator) {
          const result = await promise;
          iterator.next(result);
        }
      }
      
      // Usage
      runGenerator();
      