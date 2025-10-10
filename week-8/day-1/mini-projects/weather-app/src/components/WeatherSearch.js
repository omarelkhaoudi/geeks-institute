import { useState } from "react";
import axios from "axios";

export default function WeatherSearch({ setWeatherData }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    try {
      const API_KEY = "af84405cf34ceabfc246753dfa83c48d";
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="form-control w-50 me-2"
      />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
    </div>
  );
}
