import { useAudio } from "../../context/AudioContext/AudionContext.jsx";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { currentTrack, isPlaying, togglePlay, error } = useAudio();

  return (
    <div className="sidebar">
      <h1>Mini Spotify</h1>

      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>

      {currentTrack ? (
        <>
          <img
            src={currentTrack.image}
            alt={currentTrack.name}
            className="player-image"
          />

          <h2>{currentTrack.name}</h2>
          <p>{currentTrack.artist_name}</p>

          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </>
      ) : (
        <h3>Select track</h3>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
