import axios from "axios";
import chalk from "chalk";

const API_KEY = "91f39a07c38858da7277095a48a9a0ba"; // Ta clé API ici

export default async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    const data = res.data;
    console.log(chalk.blue.bold(`🌍 Weather in ${data.name}, ${data.sys.country}`));
    console.log(chalk.yellow(`🌡️ Temperature: ${data.main.temp}°C`));
    console.log(chalk.green(`☁️ Condition: ${data.weather[0].description}`));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error(chalk.red("❌ API Key invalide. Vérifie ta clé OpenWeatherMap."));
    } else if (error.response && error.response.status === 404) {
      console.error(chalk.red(`❌ Ville "${city}" introuvable.`));
    } else {
      console.error(chalk.red("❌ Could not fetch weather data:", error.message));
    }
  }
}
