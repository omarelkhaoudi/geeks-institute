// Async function
// Instructions

const getStarship = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("Error fetching starship:", error);
  }
};

getStarship();

// Output (in console):
// {
//   "name": "Death Star",
//   "model": "DS-1 Orbital Battle Station",
//   "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
//   "cost_in_credits": "1000000000000",
//   "length": "120000",
//   "crew": "342,953",
//   "passengers": "843,342",
//   "starship_class": "Deep Space Mobile Battlestation",
//   ...
// }

