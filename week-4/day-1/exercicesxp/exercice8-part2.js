// Part 2
// Outer function
function makeJuice(size) {
  // empty array for ingredients
  let ingredients = [];

  // inner function to add ingredients
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  // inner function to display final juice order
  function displayJuice() {
    document.getElementById("order").textContent =
      `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
  }

  // invoke addIngredients twice (6 ingredients total)
  addIngredients("apple", "banana", "orange");
  addIngredients("mango", "kiwi", "pineapple");

  // display the juice order
  displayJuice();
}

// invoke the outer function
makeJuice("large");