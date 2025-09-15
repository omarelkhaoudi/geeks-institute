// Person class
// Instructions

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Instanciation d'un objet member
const member = new Person('John');

// Vérification du type de member
console.log(typeof member); 
// Résultat : "object"

// Vérification du type de la classe elle-même
console.log(typeof Person); 
// Résultat : "function"

// Vérification du contenu de member
console.log(member); 
// Résultat : Person { name: 'John' }

// Accès à la propriété
console.log(member.name); 
// Résultat : "John"

// Vérification de l'instance
console.log(member instanceof Person); 
// Résultat : true