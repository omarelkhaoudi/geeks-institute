import axios from "axios";

export default async function fetchData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("📦 Data fetched from API:");
    console.log(res.data);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
}
