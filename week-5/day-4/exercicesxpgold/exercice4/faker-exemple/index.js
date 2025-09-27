import { faker } from "@faker-js/faker";
import promptSync from "prompt-sync";

const prompt = promptSync();
let users = []; // tableau d'objets

// Fonction qui ajoute un utilisateur fake
function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
}

// Fonction qui ajoute un utilisateur à partir du prompt
function addUserFromPrompt() {
  const name = prompt("Enter name: ");
  const street = prompt("Enter street: ");
  const country = prompt("Enter country: ");

  const user = { name, street, country };
  users.push(user);
}

// --- TEST ---
// Ajouter 3 fake users
for (let i = 0; i < 3; i++) {
  addFakeUser();
}

// Ajouter un utilisateur saisi manuellement
addUserFromPrompt();

// Afficher le tableau final
console.log(users);
