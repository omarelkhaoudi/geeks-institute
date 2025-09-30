// data/dataService.js
const axios = require("axios");

// Fonction pour récupérer les posts depuis JSONPlaceholder
async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data; // Retourne uniquement les données
  } catch (error) {
    console.error("❌ Error fetching posts:", error.message);
    throw new Error("Failed to fetch posts");
  }
}

module.exports = { fetchPosts };
