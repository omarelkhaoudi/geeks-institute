// Attendance 
// Instructions

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// Given the object above where the key is the student’s name and the value is the country they are from.
// Prompt the student for their name.
let studentName = prompt("Please enter your name:").toLowerCase();
// If the name is in the object, console.log the name of the student and the country they come from.
if (guestList[studentName]) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
    console.log("Hi! I'm a guest.");
}
// If the name is not in the object, console.log: “Hi! I’m a guest.”