// read-directory.js
const fs = require("fs");

// Lire la liste des fichiers dans le répertoire courant
fs.readdir(".", (err, files) => {
  if (err) {
    console.error("❌ Error reading directory:", err);
    return;
  }

  console.log("📂 Files in current directory:");
  files.forEach((file) => {
    console.log(" -", file);
  });
});
