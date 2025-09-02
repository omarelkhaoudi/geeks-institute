// Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(name) {
    const names = name.split(' ');
    if (names.length < 2) return name;
    return `${names[0]} ${names[1][0].toUpperCase()}.`;
}

console.log("Exercise 2:");
console.log(abbrevName("Robin Singh")); // "Robin S."