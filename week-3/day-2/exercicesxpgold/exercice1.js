// is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

function isBlank(str) {
    return str.trim() === '';
}

console.log("Exercise 1:");
console.log(isBlank(''));    // true
console.log(isBlank('abc')); // false