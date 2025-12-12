import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getImageUrl } from '../services/tmdb';
import './MovieRow.css';

function MovieRow({ title, fetchData, isLargeRow = false, onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchData();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
  }, [fetchData]);

  const handleScroll = (direction) => {
    const row = rowRef.current;
    const scrollAmount = row.clientWidth - 100;

    if (direction === 'left') {
      const newScroll = Math.max(scrollX - scrollAmount, 0);
      setScrollX(newScroll);
      row.scrollTo({ left: newScroll, behavior: 'smooth' });
    } else {
      const maxScroll = row.scrollWidth - row.clientWidth;
      const newScroll = Math.min(scrollX + scrollAmount, maxScroll);
      setScrollX(newScroll);
      row.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-wrapper">
        <button
          className="scroll-button left"
          onClick={() => handleScroll('left')}
          style={{ opacity: scrollX > 0 ? 1 : 0 }}
        >
          <FaChevronLeft />
        </button>
        <div className="row-posters" ref={rowRef}>
          {movies.map(
            (movie) =>
              (isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path) && (
                <div
                  key={movie.id}
                  className={`poster-container ${isLargeRow ? 'large' : ''}`}
                  onClick={() => onMovieClick(movie)}
                >
                  <img
                    className={`row-poster ${isLargeRow ? 'large' : ''}`}
                    src={getImageUrl(
                      isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path,
                      isLargeRow ? 'w342' : 'w300'
                    )}
                    alt={movie.name || movie.title}
                  />
                  <div className="poster-overlay">
                    <span>{movie.name || movie.title}</span>
                  </div>
                </div>
              )
          )}
        </div>
        <button
          className="scroll-button right"
          onClick={() => handleScroll('right')}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MovieRow;
