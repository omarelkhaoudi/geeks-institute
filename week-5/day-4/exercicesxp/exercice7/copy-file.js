// copy-file.js
const fs = require("fs");

// Lire le contenu de source.txt
fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading source.txt:", err);
    return;
  }

  console.log("📖 Content of source.txt:", data);

  // Écrire le contenu dans destination.txt
  fs.writeFile("destination.txt", data, "utf8", (err) => {
    if (err) {
      console.error("❌ Error writing destination.txt:", err);
      return;
    }
    console.log("✅ Successfully copied content to destination.txt");
  });
});
