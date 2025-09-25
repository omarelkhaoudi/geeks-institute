// app.js
const _ = require("lodash");   // import de lodash
const math = require("./math"); // import du module math.js

// Utiliser le module custom
const sum = math.add(10, 5);
const product = math.multiply(4, 6);

console.log("➕ Sum:", sum);
console.log("✖️ Product:", product);

// Utiliser lodash
const numbers = [10, 5, 4, 6];
const max = _.max(numbers);
const min = _.min(numbers);
const shuffled = _.shuffle(numbers);

console.log("🔝 Max:", max);
console.log("🔻 Min:", min);
console.log("🔀 Shuffled:", shuffled);
