import { useState, useEffect } from 'react';
import { FaTimes, FaPlay, FaPlus, FaCheck, FaThumbsUp, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { fetchMovieDetails, getBackdropUrl } from '../services/tmdb';
import './MovieModal.css';

function MovieModal({ movie, onClose, onPlay, myList, onAddToList, likedItems, onToggleLike }) {
  const [details, setDetails] = useState(null);
  const [muted, setMuted] = useState(true);

  const isInList = myList?.some((item) => item.id === movie?.id);
  const isLiked = likedItems?.some((item) => item.id === movie?.id);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const type = movie.media_type || (movie.first_air_date ? 'tv' : 'movie');
        const response = await fetchMovieDetails(movie.id, type);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    if (movie) {
      fetchDetails();
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

  if (!movie) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePlay = () => {
    onClose();
    onPlay(movie);
  };

  const trailer = details?.videos?.results?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  );

  const genres = details?.genres?.map((g) => g.name).join(', ');
  const year = (movie.release_date || movie.first_air_date)?.split('-')[0];
  const runtime = details?.runtime
    ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`
    : details?.episode_run_time?.[0]
    ? `${details.episode_run_time[0]}m per episode`
    : null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div
          className="modal-banner"
          style={{
            backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
          }}
        >
          {trailer && (
            <iframe
              className="modal-trailer"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${
                muted ? 1 : 0
              }&controls=0&showinfo=0&rel=0&loop=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Trailer"
            />
          )}
          <div className="modal-banner-content">
            <h1 className="modal-title">
              {movie.title || movie.name || movie.original_name}
            </h1>
            <div className="modal-buttons">
              <button className="modal-button play" onClick={handlePlay}>
                <FaPlay /> Play
              </button>
              <button
                className={`modal-button icon ${isInList ? 'active' : ''}`}
                onClick={() => onAddToList(movie)}
                title={isInList ? 'Remove from My List' : 'Add to My List'}
              >
                {isInList ? <FaCheck /> : <FaPlus />}
              </button>
              <button
                className={`modal-button icon ${isLiked ? 'active liked' : ''}`}
                onClick={() => onToggleLike(movie)}
                title={isLiked ? 'Remove Like' : 'I Like This'}
              >
                <FaThumbsUp />
              </button>
              {trailer && (
                <button
                  className="modal-button icon mute"
                  onClick={() => setMuted(!muted)}
                  title={muted ? 'Unmute' : 'Mute'}
                >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              )}
            </div>
          </div>
          <div className="modal-banner-fade" />
        </div>

        <div className="modal-info">
          <div className="modal-info-left">
            <div className="modal-meta">
              <span className="match">
                {Math.round(movie.vote_average * 10)}% Match
              </span>
              {year && <span className="year">{year}</span>}
              {runtime && <span className="runtime">{runtime}</span>}
              <span className="quality">HD</span>
            </div>
            <p className="modal-overview">{movie.overview}</p>
          </div>
          <div className="modal-info-right">
            {details?.credits?.cast?.length > 0 && (
              <p>
                <span className="label">Cast:</span>{' '}
                {details.credits.cast
                  .slice(0, 4)
                  .map((c) => c.name)
                  .join(', ')}
              </p>
            )}
            {genres && (
              <p>
                <span className="label">Genres:</span> {genres}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
