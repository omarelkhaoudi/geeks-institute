// Transform the sentence
// Instructions

// 1) Declare a global variable named allBoldItems

let allBoldItems;

// 2) Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    allBoldItems = document.querySelectorAll("strong");
}
getBold_items();

// 3) Create a function called highlight()
// that changes the color of all the bold text to blue.

function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
    }
}

// 4) Create a function called returnItemsToDefault()
// that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}

// 5) Call the function highlight()
// on mouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function returnItemsToDefault() on mouseout
// (ie. when the mouse pointer is moved out of the paragraph).

let p = document.querySelector("p");
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);