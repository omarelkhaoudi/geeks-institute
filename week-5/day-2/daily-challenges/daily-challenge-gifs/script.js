const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) return;

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`
    );

    if (!res.ok) throw new Error("Failed to fetch GIF");

    const data = await res.json();
    const gifUrl = data.data.images.downsized_medium.url;

    // Create gif card
    const gifCard = document.createElement("div");
    gifCard.classList.add("gif-card");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = searchTerm;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => {
      gifCard.remove();
    });

    gifCard.appendChild(img);
    gifCard.appendChild(deleteBtn);
    gifContainer.appendChild(gifCard);

    searchInput.value = "";
  } catch (error) {
    console.error(error);
    alert("Something went wrong fetching the GIF!");
  }
});

// Delete All
deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
