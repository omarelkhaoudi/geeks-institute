// Global variables
let currentPokemonId = 25; // Starting with Pikachu
const totalPokemon = 898; // Total number of Pokémon available in the API

// DOM elements
const pokemonImg = document.getElementById('pokemon-img');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonType = document.getElementById('pokemon-type');
const btnRandom = document.getElementById('btn-random');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// Type colors for styling
const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};

// Event listeners
btnRandom.addEventListener('click', getRandomPokemon);
btnPrev.addEventListener('click', getPreviousPokemon);
btnNext.addEventListener('click', getNextPokemon);

// Initialize with Pikachu
window.addEventListener('load', () => {
    getPokemon(currentPokemonId);
});

// Fetch Pokémon data from API
async function getPokemon(id) {
    try {
        showLoading();
        hideError();
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        
        const data = await response.json();
        displayPokemon(data);
        
    } catch (err) {
        showError();
    } finally {
        hideLoading();
    }
}

// Display Pokémon data
function displayPokemon(pokemon) {
    currentPokemonId = pokemon.id;
    
    pokemonImg.src = pokemon.sprites.other['official-artwork'].front_default || 
                    pokemon.sprites.front_default;
    pokemonName.textContent = pokemon.name;
    pokemonId.textContent = `Pokemon n° ${pokemon.id}`;
    pokemonHeight.textContent = `${pokemon.height / 10}m`;
    pokemonWeight.textContent = `${pokemon.weight / 10}kg`;
    
    // Clear previous types
    pokemonType.textContent = '';
    
    // Add each type with appropriate color
    pokemon.types.forEach(typeInfo => {
        const type = typeInfo.type.name;
        const typeSpan = document.createElement('span');
        typeSpan.textContent = type;
        typeSpan.className = 'type-badge';
        typeSpan.style.backgroundColor = typeColors[type] || '#777';
        pokemonType.appendChild(typeSpan);
    });
}

// Get random Pokémon
function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * totalPokemon) + 1;
    getPokemon(randomId);
}

// Get previous Pokémon
function getPreviousPokemon() {
    if (currentPokemonId > 1) {
        getPokemon(currentPokemonId - 1);
    } else {
        getPokemon(totalPokemon); // Wrap around to last Pokémon
    }
}

// Get next Pokémon
function getNextPokemon() {
    if (currentPokemonId < totalPokemon) {
        getPokemon(currentPokemonId + 1);
    } else {
        getPokemon(1); // Wrap around to first Pokémon
    }
}

// Show loading state
function showLoading() {
    loading.style.display = 'block';
    pokemonImg.style.opacity = '0.3';
}

// Hide loading state
function hideLoading() {
    loading.style.display = 'none';
    pokemonImg.style.opacity = '1';
}

// Show error message
function showError() {
    error.style.display = 'block';
}

// Hide error message
function hideError() {
    error.style.display = 'none';
}