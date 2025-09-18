const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"; // replace if another key was given
const button = document.getElementById("get-gif");
const container = document.getElementById("gif-container");

button.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch GIF");

    const data = await response.json();
    const gifUrl = data.data.images.downsized_medium.url;

    // clear container and append new gif
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = "Random Gif";
    container.appendChild(img);

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>⚠️ Could not load GIF. Try again!</p>";
  }
});
