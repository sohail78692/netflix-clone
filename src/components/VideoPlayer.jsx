import { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress } from 'react-icons/fa';
import { fetchMovieDetails } from '../services/tmdb';
import './VideoPlayer.css';

function VideoPlayer({ movie, onClose }) {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    async function getTrailer() {
      try {
        const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
        const response = await fetchMovieDetails(movie.id, type);
        const videos = response.data.videos?.results || [];
        const trailerVideo = videos.find(
          (v) => v.type === 'Trailer' && v.site === 'YouTube'
        ) || videos.find((v) => v.site === 'YouTube');
        setTrailer(trailerVideo);
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
      setLoading(false);
    }

    if (movie) {
      getTrailer();
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [movie]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const toggleFullscreen = () => {
    const playerContainer = document.querySelector('.video-player');
    if (!document.fullscreenElement) {
      playerContainer?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!movie) return null;

  return (
    <div className="video-player">
      <div className="video-header">
        <button className="back-button" onClick={onClose}>
          <FaArrowLeft />
          <span>Back to Browse</span>
        </button>
        <h2>{movie.title || movie.name}</h2>
      </div>

      <div className="video-container">
        {loading ? (
          <div className="video-loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${muted ? 1 : 0}&controls=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={movie.title || movie.name}
          />
        ) : (
          <div className="no-trailer">
            <div className="no-trailer-content">
              <h3>No trailer available</h3>
              <p>Sorry, we couldn't find a trailer for "{movie.title || movie.name}"</p>
              <button onClick={onClose}>Go Back</button>
            </div>
          </div>
        )}
      </div>

      <div className="video-controls">
        <button onClick={() => setMuted(!muted)} title={muted ? 'Unmute' : 'Mute'}>
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <button onClick={toggleFullscreen} title="Toggle Fullscreen">
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
