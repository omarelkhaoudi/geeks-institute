// Biggest Number in Array
// Instructions

function biggestNumberInArray(arr) {
    const nums = arr.filter(el => typeof el === 'number');
    return nums.length > 0 ? Math.max(...nums) : 0;
}

console.log("Exercise 4:");
console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a',3,4,2])); // 4
console.log(biggestNumberInArray([])); // 0