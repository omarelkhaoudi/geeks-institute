const pokemonInfo = document.getElementById("pokemonInfo");
const randomBtn = document.getElementById("randomBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("error");

let currentPokemonId = 1;

// Fetch Pokémon
async function getPokemon(id) {
  try {
    pokemonInfo.innerHTML = "";
    errorMsg.classList.add("hidden");
    loading.classList.remove("hidden");

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error("Pokemon not found");

    const data = await response.json();

    currentPokemonId = data.id;

    const pokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name).join(", "),
      image: data.sprites.front_default
    };

    // Display
    pokemonInfo.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h2>${pokemon.name} (#${pokemon.id})</h2>
      <p><strong>Height:</strong> ${pokemon.height}</p>
      <p><strong>Weight:</strong> ${pokemon.weight}</p>
      <p><strong>Type:</strong> ${pokemon.types}</p>
    `;
  } catch (error) {
    console.error(error);
    errorMsg.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}

// Event Listeners
randomBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // 898 pokemons
  getPokemon(randomId);
});

prevBtn.addEventListener("click", () => {
  if (currentPokemonId > 1) {
    getPokemon(currentPokemonId - 1);
  }
});

nextBtn.addEventListener("click", () => {
  getPokemon(currentPokemonId + 1);
});
