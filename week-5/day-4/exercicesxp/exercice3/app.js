// app.js
const { readFile, writeFile } = require("./fileManager");

// Lire le fichier "Hello World.txt"
readFile("Hello World.txt", (err, data) => {
  if (err) return;

  console.log("📖 Content of Hello World.txt:", data);

  // Écrire dans "Bye World.txt"
  writeFile("Bye World.txt", "Writing to the file", (err) => {
    if (!err) {
      console.log("✍️ Writing done! Now let's read Bye World.txt:");

      // Lire le fichier Bye World.txt après l’écriture
      readFile("Bye World.txt", (err, newData) => {
        if (!err) console.log("📖 Content of Bye World.txt:", newData);
      });
    }
  });
});
