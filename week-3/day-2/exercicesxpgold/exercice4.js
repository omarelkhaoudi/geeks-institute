// Omnipresent value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array,
// a value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arr, val) {
    return arr.every(subArr => subArr.includes(val));
}

console.log("Exercise 4:");
console.log(isOmnipresent([[1, 2], [3, 4], [1, 3]], 1)); // true
console.log(isOmnipresent([[1, 2], [3, 4], [1, 3]], 2)); // false