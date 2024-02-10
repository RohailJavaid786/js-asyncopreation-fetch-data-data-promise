

function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Async operation succeeded!");
        } else {
          reject("Async operation failed!");
        }
      }, 2000); // Simulating a 2-second delay
    });
  }


  simulateAsyncOperation(true)
  .then((message) => {
    console.log(message); // Async operation succeeded!
  })
  .catch((error) => {
    console.error(error); // This won't be executed in this case
  });

simulateAsyncOperation(false)
  .then((message) => {
    console.log(message); // This won't be executed in this case
  })
  .catch((error) => {
    console.error(error); // Async operation failed!
  });


  // 2nd answer  of question 8 part (b)
  //starting from here 

  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  fetchData()
    .then((data) => processData(data))
    .then((processedData) => {
      console.log(processedData); // Logs "FETCHED DATA"
    })
    .catch((error) => {
      console.error(error); // This won't be executed in this case
    });



