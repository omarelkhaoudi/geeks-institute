function allTruthy(...args) {
  return args.every(Boolean);
}

// Tests
console.log(allTruthy(true, true, true));       // true
console.log(allTruthy(true, false, true));      // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));      // false
console.log(allTruthy("Hello", 1, [], {}));    // true
console.log(allTruthy("", 1, true));           // false
