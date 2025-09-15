// First function: makeAllCaps
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Check if all items are strings
    if (words.every(word => typeof word === "string")) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Error: Not all items in the array are strings ❌");
    }
  });
}

// Second function: sortWords
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is not bigger than 4 ❌");
    }
  });
}

// Test cases

// Case 1: Array contains a number → should catch
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: "Error: Not all items in the array are strings"

// Case 2: Array length ≤ 4 → should catch
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: "Error: Array length is not bigger than 4"

// Case 3: Array valid → should resolve
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
