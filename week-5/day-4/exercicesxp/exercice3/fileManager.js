// fileManager.js
const fs = require("fs");

// Fonction pour lire un fichier
function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err);
      return callback(err, null);
    }
    callback(null, data);
  });
}

// Fonction pour écrire dans un fichier
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("❌ Error writing file:", err);
      return callback(err);
    }
    console.log(`✅ Successfully written to ${filePath}`);
    callback(null);
  });
}

// Export des fonctions
module.exports = {
  readFile,
  writeFile,
};
