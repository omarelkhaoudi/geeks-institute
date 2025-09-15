// Promises
// Instructions

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds
});

// Test
myPromise.then(result => console.log(result));
