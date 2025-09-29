// script.js
const prompt = require("prompt-sync")();
const { minutesLived } = require("./date.js");

const birthdate = prompt("Enter your birthdate (YYYY-MM-DD): ");
console.log(minutesLived(birthdate));
