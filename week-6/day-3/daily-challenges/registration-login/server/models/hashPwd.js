const bcrypt = require("bcrypt");

// Stocke les mots de passe hashés
let hashpwd = [
  // Exemple :
  // { id: 1, username: "user1", password: "$2b$10$..." }
];

module.exports = { hashpwd, bcrypt };
