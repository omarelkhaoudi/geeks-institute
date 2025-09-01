// Find the numbers divisible by 23
// Instructions
// Create a function that returns an array of numbers between 0 and 500 that are divisible by 23.
// At the end, console.log the sum of these numbers.

function displayNumbersDivisible() {
    let sum = 0;
    let numbers = [];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
            sum += i;
        }   
    }
    console.log("Numbers divisible by 23:", numbers);
    console.log("Sum:", sum);
}
displayNumbersDivisible();

// Bonus: Add a parameter divisor to the function.
function displayNumbersDivisibleBy(divisor) {
    let sum = 0;
    let numbers = [];
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }   
    }
    console.log(`Numbers divisible by ${divisor}:`, numbers);
    console.log("Sum:", sum);
}
displayNumbersDivisibleBy(45);
