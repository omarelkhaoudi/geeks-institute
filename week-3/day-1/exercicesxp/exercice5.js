// Family
// Instructions

// Create an object called family with a few key value pairs.
const family = {
    father: "John",
    mother: "Jane",
    children: 3,
    pets: ["dog", "cat"]
};
// Using a for loop, console.log the keys of the object.
for (let key in family) {
    console.log(key);
}
// Using a for loop, console.log the values of the object.
for (let key in family) {
    console.log(family[key]);
}