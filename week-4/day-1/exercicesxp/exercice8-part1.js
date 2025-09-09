// Juice Bar
// Part 1

// Outer function
function makeJuice(size) {
  // Inner function
  function addIngredients(ing1, ing2, ing3) {
    document.getElementById("order").textContent =
      `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
  }

  // Call inner function once
  addIngredients("apple", "banana", "orange");
}

// Invoke outer function
makeJuice("large");



