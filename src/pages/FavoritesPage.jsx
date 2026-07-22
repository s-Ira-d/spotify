import { useAudio } from "../context/AudioContext/AudionContext";
import "../components/TrackList/TrackList.css";

export default function FavoritesPage() {
  const { favorites, playTrack, removeFromFavorites } = useAudio();

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite tracks yet.</p>
      ) : (
        <div className="tracks-grid">
          {favorites.map((track) => (
            <div className="track-card" key={track.id}>
              <img src={track.image} alt={track.name} />

              <h3>{track.name}</h3>

              <p>{track.artist_name}</p>

              <button className="play2-btn" onClick={() => playTrack(track)}>
                Play
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromFavorites(track.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
