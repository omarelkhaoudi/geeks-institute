// Counter class
// Instructions

// Définition de la classe Counter
class Counter {
  constructor() {
    this.count = 0; // Initialisation de la propriété count
  }

  increment() {
    this.count++; // Incrémente count de 1
  }
}

// Création d'une instance counterOne
const counterOne = new Counter();

// Incréments sur counterOne
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

// Assignation d'une nouvelle variable à la même instance
const counterTwo = counterOne;

// Incrément via counterTwo (même objet que counterOne)
counterTwo.increment(); // count = 3

// Affichage de counterOne.count
console.log(counterOne.count); // 3
