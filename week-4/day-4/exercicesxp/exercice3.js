// Objet JavaScript
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    }
  }
};

// Conversion en JSON (chaîne)
const marioJSON = JSON.stringify(marioGame);
console.log("JSON (minifié) :", marioJSON);

// Pretty print JSON
const prettyMarioJSON = JSON.stringify(marioGame, null, 2);
console.log("JSON pretty print :\n", prettyMarioJSON);

// Reconversion en objet JS
const marioObjectAgain = JSON.parse(marioJSON);
console.log("Objet JS reconverti :", marioObjectAgain);

// Vérification dans le debugger
// Place un breakpoint ici pour inspecter marioJSON et prettyMarioJSON
debugger;
