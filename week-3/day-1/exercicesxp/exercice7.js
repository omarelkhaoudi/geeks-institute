// Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
let societyName = '';
for (let i = 0; i < names.length; i++) {
    societyName += names[i][0];
}
societyName = societyName.split('').sort().join('');
console.log(societyName);
// Console.log the name of their secret society. The output should be "ABJKPS"