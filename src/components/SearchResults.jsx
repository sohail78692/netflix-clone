import { useState, useEffect } from 'react';
import { searchMulti, getImageUrl } from '../services/tmdb';
import './SearchResults.css';

function SearchResults({ query, onMovieClick }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await searchMulti(query);
          setResults(response.data.results.filter(
            item => (item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path
          ));
        } catch (error) {
          console.error('Search error:', error);
        }
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  if (loading) {
    return (
      <div className="search-results">
        <div className="search-header">
          <h2>Searching for "{query}"...</h2>
        </div>
        <div className="search-loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <h2>
          {results.length > 0
            ? `Results for "${query}"`
            : `No results found for "${query}"`}
        </h2>
      </div>
      <div className="search-grid">
        {results.map((item) => (
          <div
            key={item.id}
            className="search-item"
            onClick={() => onMovieClick(item)}
          >
            <img
              src={getImageUrl(item.poster_path, 'w342')}
              alt={item.title || item.name}
            />
            <div className="search-item-info">
              <h3>{item.title || item.name}</h3>
              <div className="search-item-meta">
                <span className="rating">
                  {Math.round(item.vote_average * 10)}% Match
                </span>
                <span className="year">
                  {(item.release_date || item.first_air_date)?.split('-')[0]}
                </span>
                <span className="type">
                  {item.media_type === 'tv' ? 'TV Show' : 'Movie'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
