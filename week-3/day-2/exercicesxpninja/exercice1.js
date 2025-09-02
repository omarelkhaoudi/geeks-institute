// Random Number
// Instructions

function randomEvenNumbers() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", randomNum);
    console.log("Even numbers from 0 to", randomNum, ":");
    for (let i = 0; i <= randomNum; i += 2) {
        console.log(i);
    }
}
randomEvenNumbers();