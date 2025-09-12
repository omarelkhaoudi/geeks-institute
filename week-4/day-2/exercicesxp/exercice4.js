// Employees
// Instructions

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1)
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2)
const welcomeStudents1 = users.filter(user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3)
const fullStackLastNames = users
  .filter(user => user.role === "Full Stack Resident") // garde seulement les Full Stack Residents
  .map(user => user.lastName);                         // récupère seulement le lastName

console.log(fullStackLastNames);