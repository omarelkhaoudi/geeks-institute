// file-info.js
const fs = require("fs");
const path = require("path");

function getFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");

  if (!fs.existsSync(filePath)) {
    console.log("❌ File does not exist!");
    return;
  }

  const stats = fs.statSync(filePath);

  console.log("📂 File exists:", true);
  console.log("📏 Size:", stats.size, "bytes");
  console.log("🕒 Created at:", stats.birthtime);
}

module.exports = getFileInfo;
