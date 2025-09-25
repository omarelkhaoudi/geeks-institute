// app.js

// Import the array of persons from data.js
import persons from "./data.js";

// Function to calculate the average age
function calculateAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Use the imported array and the function
const averageAge = calculateAverageAge(persons);

console.log("✅ Persons data:", persons);
console.log(`📊 The average age is: ${averageAge.toFixed(2)}`);
