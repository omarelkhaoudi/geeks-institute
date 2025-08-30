// Print the following pattern using a loop in JavaScript
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let pattern = "";

for (let i = 1; i <= 6; i++) {
    pattern += "* ";   // add a star each time
    console.log(pattern);
}
