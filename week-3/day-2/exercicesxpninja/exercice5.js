// Unique Elements
// Instructions

function uniqueElements(arr) {
    return [...new Set(arr)];
}

console.log("Exercise 5:");
console.log(uniqueElements([1,2,3,3,3,3,4,5])); // [1,2,3,4,5]