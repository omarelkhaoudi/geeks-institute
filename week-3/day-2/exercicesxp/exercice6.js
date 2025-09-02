// Change the navbar
// Instructions

// 1)
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

// 2)
const newLi = document.createElement("li");

// 3)
newLi.textContent = "Logout";

// 4)
nav.querySelector("ul").appendChild(newLi);

// 5)
const ul = nav.querySelector("ul");
console.log("First:", ul.firstElementChild.textContent);
console.log("Last:", ul.lastElementChild.textContent);

