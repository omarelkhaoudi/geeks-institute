import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesList() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) return <p className="text-center">No favorites yet.</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">Favorites</h2>
      <ul className="list-group">
        {favorites.map((city) => (
          <li key={city} className="list-group-item d-flex justify-content-between align-items-center">
            {city}
            <button onClick={() => removeFavorite(city)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
