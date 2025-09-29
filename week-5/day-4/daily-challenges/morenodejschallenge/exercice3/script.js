// script.js
const nextHoliday = require("./date");

const result = nextHoliday();

console.log(`Today is: ${result.today}`);
console.log(
  `🎉 The next holiday is ${result.holiday} (${result.holidayDate})`
);
console.log(`Time left: ${result.remaining}`);
