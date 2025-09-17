// Giphy API
// Instructions

const getGifs = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // convert response to JS object
    console.log(data); // log the whole object (like in the screenshot)
  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
};

getGifs();
