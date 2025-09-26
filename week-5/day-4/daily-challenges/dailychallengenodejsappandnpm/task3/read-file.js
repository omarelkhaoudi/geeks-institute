// read-file.js
import fs from "fs";
import path from "path";

export default function readFile() {
  const filePath = path.join("task3", "files", "file-data.txt");
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("❌ Error reading file:", err);
    return null;
  }
}
