// Work with forms 
// Instructions

// 1) Retrieve the form and console.log it.

const form = document.getElementById("userForm");
console.log("Form:", form);

// 2) Retrieve the inputs by their id and console.log them.

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log("Inputs by ID:", fnameInput, lnameInput);

// 3) Retrieve the inputs by their name attribute and console.log them.

const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];
console.log("Inputs by Name:", fnameByName, lnameByName);

// 4) When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

 form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page refresh

      // Get values
      const firstName = fnameInput.value.trim();
      const lastName = lnameInput.value.trim();

      // Check if inputs are not empty
      if (firstName === "" || lastName === "") {
        alert("Please fill in both fields.");
        return;
      }

      // Clear old answers before adding new ones
      const ul = document.querySelector(".usersAnswer");
      ul.innerHTML = "";

      // Create li for each value and append
      const li1 = document.createElement("li");
      li1.textContent = firstName;
      const li2 = document.createElement("li");
      li2.textContent = lastName;

      ul.appendChild(li1);
      ul.appendChild(li2);

      // Optional: reset form after submission
      form.reset();
    });