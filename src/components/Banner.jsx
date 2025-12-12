import { useState, useEffect } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { fetchNetflixOriginals, getBackdropUrl } from '../services/tmdb';
import './Banner.css';

function Banner({ onInfoClick, onPlay }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchNetflixOriginals();
        const results = response.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    }
    fetchData();
  }, []);

  if (!movie) return <div className="banner-loading"></div>;

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <p className="banner-description">{truncate(movie.overview, 150)}</p>
        <div className="banner-buttons">
          <button className="banner-button play" onClick={() => onPlay(movie)}>
            <FaPlay /> Play
          </button>
          <button
            className="banner-button info"
            onClick={() => onInfoClick(movie)}
          >
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
