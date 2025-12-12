import { getImageUrl } from '../services/tmdb';
import './MyList.css';

function MyList({ items, onMovieClick, onRemove }) {
  if (!items || items.length === 0) {
    return (
      <div className="mylist-page">
        <div className="mylist-header">
          <h1>My List</h1>
        </div>
        <div className="mylist-empty">
          <div className="empty-icon">📺</div>
          <h2>Your list is empty</h2>
          <p>Add movies and TV shows to your list to watch them later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mylist-page">
      <div className="mylist-header">
        <h1>My List</h1>
        <span className="count">{items.length} titles</span>
      </div>
      <div className="mylist-grid">
        {items.map((item) => (
          <div key={item.id} className="mylist-item">
            <div className="mylist-poster" onClick={() => onMovieClick(item)}>
              <img
                src={getImageUrl(item.poster_path || item.backdrop_path, 'w342')}
                alt={item.title || item.name}
              />
              <div className="mylist-overlay">
                <span className="play-icon">▶</span>
              </div>
            </div>
            <div className="mylist-info">
              <h3>{item.title || item.name}</h3>
              <div className="mylist-meta">
                <span className="rating">{Math.round(item.vote_average * 10)}%</span>
                <span className="year">
                  {(item.release_date || item.first_air_date)?.split('-')[0]}
                </span>
              </div>
              <button className="remove-btn" onClick={() => onRemove(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
