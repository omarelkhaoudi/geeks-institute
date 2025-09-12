// Colors 2
// Instructions

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// 1) Write a JavaScript program that displays the colors in the following order :
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color, index) => {
  let num = index + 1;  // car l’index commence à 0
  // Choix du suffixe avec le ternary operator
  let suffix = (num === 1) ? ordinal[1]   // st
             : (num === 2) ? ordinal[2]   // nd
             : (num === 3) ? ordinal[3]   // rd
             : ordinal[0];                // th par défaut

  console.log(`${num}${suffix} choice is ${color}.`);
});