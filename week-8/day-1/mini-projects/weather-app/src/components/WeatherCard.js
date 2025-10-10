import { useFavorites } from "../context/FavoritesContext";

export default function WeatherCard({ data }) {
  const { addFavorite, favorites } = useFavorites();
  const isFavorite = favorites.includes(data.name);

  return (
    <div className="card text-center mx-auto" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <p className="card-text">{data.weather[0].description}</p>
        <p className="card-text">{data.main.temp}°C</p>
        <button
          onClick={() => addFavorite(data.name)}
          className="btn btn-warning"
          disabled={isFavorite}
        >
          {isFavorite ? "Saved" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
