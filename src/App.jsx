import { useState, useEffect } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import VideoPlayer from './components/VideoPlayer';
import SearchResults from './components/SearchResults';
import MyList from './components/MyList';
import Footer from './components/Footer';
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
  fetchPopularTV,
  fetchTopRatedTV,
  fetchAiringToday,
  fetchDramaTV,
  fetchCrimeTV,
  fetchSciFiTV,
  fetchNowPlaying,
  fetchPopularMovies,
  fetchUpcoming,
  fetchThrillerMovies,
  fetchSciFiMovies,
  fetchAnimationMovies,
  fetchTrendingDay,
} from './services/tmdb';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [myList, setMyList] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  // Check for existing user session
  useEffect(() => {
    const savedUser = localStorage.getItem('netflix-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Load saved data from localStorage
  useEffect(() => {
    const savedList = localStorage.getItem('netflix-mylist');
    const savedLikes = localStorage.getItem('netflix-likes');
    if (savedList) setMyList(JSON.parse(savedList));
    if (savedLikes) setLikedItems(JSON.parse(savedLikes));
  }, []);

  // Save to localStorage when lists change
  useEffect(() => {
    localStorage.setItem('netflix-mylist', JSON.stringify(myList));
  }, [myList]);

  useEffect(() => {
    localStorage.setItem('netflix-likes', JSON.stringify(likedItems));
  }, [likedItems]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('netflix-user');
    setUser(null);
    setCurrentPage('home');
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handlePlay = (movie) => {
    setPlayingMovie(movie);
  };

  const handleClosePlayer = () => {
    setPlayingMovie(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setCurrentPage('search');
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  const handleAddToList = (movie) => {
    setMyList((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      if (exists) {
        return prev.filter((item) => item.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const handleToggleLike = (movie) => {
    setLikedItems((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      if (exists) {
        return prev.filter((item) => item.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  // Show login page if not authenticated
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    // Search results
    if (currentPage === 'search' && searchQuery) {
      return (
        <SearchResults
          query={searchQuery}
          onMovieClick={handleMovieClick}
        />
      );
    }

    // My List page
    if (currentPage === 'mylist') {
      return (
        <MyList
          items={myList}
          onMovieClick={handleMovieClick}
          onRemove={handleAddToList}
        />
      );
    }

    // TV Shows page
    if (currentPage === 'tvshows') {
      return (
        <>
          <Banner onInfoClick={handleMovieClick} onPlay={handlePlay} />
          <div className="movie-rows">
            <MovieRow title="Popular TV Shows" fetchData={fetchPopularTV} onMovieClick={handleMovieClick} />
            <MovieRow title="Top Rated TV" fetchData={fetchTopRatedTV} onMovieClick={handleMovieClick} />
            <MovieRow title="Airing Today" fetchData={fetchAiringToday} onMovieClick={handleMovieClick} />
            <MovieRow title="Netflix Originals" fetchData={fetchNetflixOriginals} isLargeRow onMovieClick={handleMovieClick} />
            <MovieRow title="Drama Series" fetchData={fetchDramaTV} onMovieClick={handleMovieClick} />
            <MovieRow title="Crime TV" fetchData={fetchCrimeTV} onMovieClick={handleMovieClick} />
            <MovieRow title="Sci-Fi & Fantasy" fetchData={fetchSciFiTV} onMovieClick={handleMovieClick} />
          </div>
        </>
      );
    }

    // Movies page
    if (currentPage === 'movies') {
      return (
        <>
          <Banner onInfoClick={handleMovieClick} onPlay={handlePlay} />
          <div className="movie-rows">
            <MovieRow title="Now Playing" fetchData={fetchNowPlaying} onMovieClick={handleMovieClick} />
            <MovieRow title="Popular Movies" fetchData={fetchPopularMovies} onMovieClick={handleMovieClick} />
            <MovieRow title="Top Rated" fetchData={fetchTopRated} onMovieClick={handleMovieClick} />
            <MovieRow title="Upcoming" fetchData={fetchUpcoming} onMovieClick={handleMovieClick} />
            <MovieRow title="Action Movies" fetchData={fetchActionMovies} onMovieClick={handleMovieClick} />
            <MovieRow title="Thriller Movies" fetchData={fetchThrillerMovies} onMovieClick={handleMovieClick} />
            <MovieRow title="Sci-Fi Movies" fetchData={fetchSciFiMovies} onMovieClick={handleMovieClick} />
            <MovieRow title="Animation" fetchData={fetchAnimationMovies} onMovieClick={handleMovieClick} />
          </div>
        </>
      );
    }

    // New & Popular page
    if (currentPage === 'new') {
      return (
        <>
          <Banner onInfoClick={handleMovieClick} onPlay={handlePlay} />
          <div className="movie-rows">
            <MovieRow title="Trending Today" fetchData={fetchTrendingDay} onMovieClick={handleMovieClick} />
            <MovieRow title="Trending This Week" fetchData={fetchTrending} onMovieClick={handleMovieClick} />
            <MovieRow title="Coming Soon" fetchData={fetchUpcoming} onMovieClick={handleMovieClick} />
            <MovieRow title="Now Playing" fetchData={fetchNowPlaying} onMovieClick={handleMovieClick} />
            <MovieRow title="Airing Today" fetchData={fetchAiringToday} onMovieClick={handleMovieClick} />
            <MovieRow title="Top Rated Movies" fetchData={fetchTopRated} onMovieClick={handleMovieClick} />
            <MovieRow title="Top Rated TV" fetchData={fetchTopRatedTV} onMovieClick={handleMovieClick} />
          </div>
        </>
      );
    }

    // Home page (default)
    return (
      <>
        <Banner onInfoClick={handleMovieClick} onPlay={handlePlay} />
        <div className="movie-rows">
          <MovieRow
            title="Netflix Originals"
            fetchData={fetchNetflixOriginals}
            isLargeRow
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Trending Now"
            fetchData={fetchTrending}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Top Rated"
            fetchData={fetchTopRated}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Action Movies"
            fetchData={fetchActionMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Comedy Movies"
            fetchData={fetchComedyMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Horror Movies"
            fetchData={fetchHorrorMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Romance Movies"
            fetchData={fetchRomanceMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieRow
            title="Documentaries"
            fetchData={fetchDocumentaries}
            onMovieClick={handleMovieClick}
          />
        </div>
      </>
    );
  };

  return (
    <div className="app">
      <Navbar
        onSearch={handleSearch}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        user={user}
        onLogout={handleLogout}
      />

      {renderContent()}

      <Footer />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onPlay={handlePlay}
          myList={myList}
          onAddToList={handleAddToList}
          likedItems={likedItems}
          onToggleLike={handleToggleLike}
        />
      )}

      {playingMovie && (
        <VideoPlayer movie={playingMovie} onClose={handleClosePlayer} />
      )}
    </div>
  );
}

export default App;
