import { useEffect, useState } from "react";
import { fetchTracks } from "../services/api";
import { useAudio } from "../context/AudioContext/AudionContext";
import "../components/TrackList/TrackList.css";

export default function HomePage() {
  const [tracks, setTracks] = useState([]);

  const { playTrack } = useAudio();

  useEffect(() => {
    fetchTracks().then(setTracks);
  }, []);

  return (
    <div>
      <h1>Welcome to Mini Spotify</h1>

      <p>Search and listen to your favorite tracks.</p>

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
