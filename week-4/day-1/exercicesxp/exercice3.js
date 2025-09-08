// Is it a string ?
// Arrow function qui vérifie si l’argument est une string
const isString = (value) => typeof value === "string";

// Tests
console.log(isString('hello'));        // true
console.log(isString([1, 2, 4, 0]));   // false
console.log(isString(123));            // false
console.log(isString("123"));          // true
console.log(isString({ key: "value"}));// false