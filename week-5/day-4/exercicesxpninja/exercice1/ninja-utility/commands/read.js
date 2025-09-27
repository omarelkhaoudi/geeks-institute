import fs from "fs";

export default function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log("📖 File Content:\n", data);
  } catch (error) {
    console.error("❌ Could not read file:", error.message);
  }
}
