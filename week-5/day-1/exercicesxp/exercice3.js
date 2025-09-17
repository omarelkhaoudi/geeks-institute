// Resolve & Reject
// Instructions

// Promise that resolves with the value 3
const promise1 = Promise.resolve(3);

// Promise that rejects with the string "Boo!"
const promise2 = Promise.reject("Boo!");

// Test
promise1.then(result => console.log("Resolved with:", result));
// Output: Resolved with: 3

promise2.catch(error => console.log("Rejected with:", error));
// Output: Rejected with: Boo!
