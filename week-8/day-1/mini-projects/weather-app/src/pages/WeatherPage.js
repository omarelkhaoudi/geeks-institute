import WeatherSearch from "../components/WeatherSearch";
import WeatherCard from "../components/WeatherCard";
import { useState } from "react";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Weather App</h1>
      <WeatherSearch setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}
