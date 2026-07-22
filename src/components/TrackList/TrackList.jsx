import { fetchTracks } from "../../services/api.js";
import { useAudio } from "../../context/AudioContext/AudionContext.jsx";
import { useEffect, useState } from "react";
import "./TrackList.css";

export function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");

  const { playTrack } = useAudio();

  useEffect(() => {
    fetchTracks(search)
      .then(setTracks)
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div className="track-list">
      <h2>Tracks</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="tracks-grid">
        {tracks.map((track) => (
          <div className="track-card" key={track.id}>
            <img src={track.image} alt={track.name} />

            <h3>{track.name}</h3>
            <p>{track.artist_name}</p>

            <button onClick={() => playTrack(track)}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}
