// User & id
// Instructions

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Transformer l'objet en tableau
const usersArray = Object.entries(users);
console.log(usersArray);
// Résultat : [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Multiplier chaque ID par 2
const updatedUsers = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsers);
// Résultat : [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// (Bonus) Reconvertir en objet si besoin
const updatedUsersObject = Object.fromEntries(updatedUsers);
console.log(updatedUsersObject);
// Résultat : { user1: 36546, user2: 185666, user3: 180630 }