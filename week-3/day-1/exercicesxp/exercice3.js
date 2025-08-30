// Repeat the question

// Prompt the user for a number. Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let userInput = prompt("Please enter a number:");
console.log(typeof userInput); // The type is string
// While the number is smaller than 10 continue asking the user for a new number. Tip : Which while loop is more relevant for this situation?
while (Number(userInput) < 10) {
    userInput = prompt("The number is smaller than 10, please enter a new number:");
    console.log(typeof userInput); // The type is still string
}
