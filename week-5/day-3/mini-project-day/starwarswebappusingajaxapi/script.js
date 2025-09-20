const card = document.getElementById("characterCard");
const btn = document.getElementById("findBtn");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("error");

// Function: fetch random character
async function getCharacter() {
  try {
    // Reset states
    card.innerHTML = "";
    errorMsg.classList.add("hidden");
    loading.classList.remove("hidden");

    // Random character (1 → 83)
    const randomId = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();

    // Get character
    const character = data.result.properties;

    // Fetch homeworld
    const homeResp = await fetch(character.homeworld);
    const homeData = await homeResp.json();
    const homeWorld = homeData.result.properties.name;

    // Display data
    card.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${homeWorld}</p>
    `;
  } catch (error) {
    console.error(error);
    errorMsg.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}

// Event listener
btn.addEventListener("click", getCharacter);
