// Your favorite colors

// Create an array called colors where the value is a list of your favorite colors.
const colors = ["blue", "green", "black", "white"];
// Loop through the array and for each color, log a string like so: "My #1 choice is blue", "My #2 choice is green" etc.
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}
// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the correct suffix for each number.
function getSuffix(number) {
    const j = number % 10,
          k = number % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${getSuffix(i + 1)} choice is ${colors[i]}`);
}
