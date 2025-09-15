// Bird class
// Instructions

// Classe parent Bird
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

// Classe enfant Flamingo qui étend Bird
class Flamingo extends Bird {
  constructor() {
    super(); // ⚠️ Toujours appeler super() en premier
    console.log("I'm pink. 🌸");
  }
}

// Création d'une instance
const pet = new Flamingo();

// Résultat attendu dans la console :
// I'm a bird. 🦢
// I'm pink. 🌸
