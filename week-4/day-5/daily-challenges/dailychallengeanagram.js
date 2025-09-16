function isAnagram(str1, str2) {
  // Step 1: clean inputs
  const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // Step 2: check lengths (quick fail)
  if (cleanStr1.length !== cleanStr2.length) return false;

  // Step 3: sort letters and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("Astronomer", "Moon starer"));     // true
console.log(isAnagram("School master", "The classroom"));// true
console.log(isAnagram("The Morse Code", "Here come dots"));// true
console.log(isAnagram("Hello", "World"));                // false
