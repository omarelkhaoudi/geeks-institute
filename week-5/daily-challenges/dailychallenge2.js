// Convert Morse JSON string to JavaScript object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse); // Convert JSON string to object
    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty");
    } else {
      resolve(morseJS);
    }
  });
}

// Convert user input to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {
      if (char === " ") {
        translation.push(""); // Add empty line for spaces
      } else if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" does not exist in Morse code`);
        return;
      }
    }

    resolve(translation);
  });
}

// Display Morse translation on the page
function joinWords(morseTranslation) {
  const container = document.createElement("pre"); // Preformatted text
  container.textContent = morseTranslation.join("\n");
  document.body.appendChild(container);
}

// Chain the functions
toJs()
  .then(obj => toMorse(obj))
  .then(translation => joinWords(translation))
  .catch(error => alert(error));
