// Capitalized Letters
// Instructions

function capitalize(str) {
    const evenCaps = str.split('').map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch).join('');
    const oddCaps = str.split('').map((ch, i) => i % 2 !== 0 ? ch.toUpperCase() : ch).join('');
    return [evenCaps, oddCaps];
}

console.log("Exercise 2:");
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']