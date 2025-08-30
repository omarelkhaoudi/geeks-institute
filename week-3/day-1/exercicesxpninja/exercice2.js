// Grade Average
// Instructions

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
function findAvg(gradesList) {
    // The function should return the average of the grades.
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

// Your function must calculate and console.log the average.
console.log(findAvg([90, 98, 89, 100, 100, 86, 94]));

// If the average is above 65 let the user know they passed
if (findAvg([90, 98, 89, 100, 100, 86, 94]) > 65) {
    console.log("You passed");
}

// If the average is equal to or below 65 let the user know they failed and must repeat the course
if (findAvg([50, 40, 30, 20, 10]) <= 65) {
    console.log("You failed and must repeat the course");
}
// Call the function a few times with different lists of grades to make sure it is working
console.log(findAvg([70, 75, 80, 85, 90]));
console.log(findAvg([60, 55, 50, 45, 40]));
console.log(findAvg([100, 100, 100, 100, 100]));
console.log(findAvg([0, 0, 0, 0, 0]));
console.log(findAvg([65, 65, 65, 65, 65]));
console.log(findAvg([66, 67, 68, 69, 70]));

