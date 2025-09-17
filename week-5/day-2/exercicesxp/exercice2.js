// Giphy API
// Instructions

const getSunGifs = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // convert JSON response to JS object
    console.log(data); // log the entire object
  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
};

getSunGifs();
