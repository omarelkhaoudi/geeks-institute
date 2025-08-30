// Checking the BMI
// Instructions

// Create two objects, each object should hold a person’s details. Here are the details: Full name, mass, and height.
const person1 = {
    fullName: "John Doe",
    mass: 85, // in kg
    height: 1.8 // in meters
};
const person2 = {
    fullName: "Jane Smith",
    mass: 70, // in kg
    height: 1.65 // in meters
};

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
person1.bmi = function() {
    return this.mass / (this.height * this.height);
}
person2.bmi = function() {
    return this.mass / (this.height * this.height);
}