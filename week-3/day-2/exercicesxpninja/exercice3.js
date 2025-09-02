// Is palindrome?
// Instructions

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log("Exercise 3:");
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
