// SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.

function swapCase(str) {
    let swapped = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

console.log("Exercise 3:");
console.log(swapCase("The Quick Brown Fox")); // "tHE qUICK bROWN fOX"