// Transform the sentence
// Instructions

// 1) Declare a global variable named allBoldItems

let allBoldItems;

// 2) Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    allBoldItems = document.querySelectorAll("strong");
}
getBold_items();
