const input = document.getElementById('lettersOnly');

// Écouteur sur chaque modification (saisie, collage, glisser-déposer...)
input.addEventListener('input', () => {
  // Supprime tout caractère qui n’est pas une lettre
  input.value = input.value.replace(/[^a-z]/gi, '');
});
