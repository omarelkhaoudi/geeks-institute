// Part 1 - Array Methods
// const people = ["Greg", "Mary", "Devon", "James"];

//1) Write code to remove “Greg” from the people array.
people.shift();
console.log(people);
//2) Write code to replace “James” to “Jason”.
people[2] = "Jason";
console.log(people);
// 3) Write code to add your name to the end of the people array.
people.push("Omar");
console.log(people);
// 4) Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// 5) Write code to make a copy of the people array using the slice method. The copy should NOT include “Mary” or your name.
const copy = people.slice(1, 3);
console.log(copy);
// 6) Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// It returns -1 because "Foo" is not in the array.
// 7) Create a variable called last which value is the last element of the array. (Hint: What is the relationship between the index of the last element and the length of the array?)
const last = people[people.length - 1];
console.log(last);

// Part 2 - Loops
// 1) Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 2) Using a loop, iterate through the people array and exit the loop after console.logging “Jason” (inclusive).
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
    if (people[i] === "Jason") {
    break;
  }
}


