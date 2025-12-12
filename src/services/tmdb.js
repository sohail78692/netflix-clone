import axios from 'axios';

const API_KEY = '4e44d9029b1270a757cddc766a1bcb63'; // Public demo key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path) => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/original${path}`;
};

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Home page fetches
export const fetchTrending = () => tmdbApi.get('/trending/all/week');
export const fetchNetflixOriginals = () => tmdbApi.get('/discover/tv', { params: { with_networks: 213 } });
export const fetchTopRated = () => tmdbApi.get('/movie/top_rated');
export const fetchActionMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 28 } });
export const fetchComedyMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 35 } });
export const fetchHorrorMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 27 } });
export const fetchRomanceMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 10749 } });
export const fetchDocumentaries = () => tmdbApi.get('/discover/movie', { params: { with_genres: 99 } });

// TV Shows page fetches
export const fetchPopularTV = () => tmdbApi.get('/tv/popular');
export const fetchTopRatedTV = () => tmdbApi.get('/tv/top_rated');
export const fetchAiringToday = () => tmdbApi.get('/tv/airing_today');
export const fetchOnTheAirTV = () => tmdbApi.get('/tv/on_the_air');
export const fetchDramaTV = () => tmdbApi.get('/discover/tv', { params: { with_genres: 18 } });
export const fetchCrimeTV = () => tmdbApi.get('/discover/tv', { params: { with_genres: 80 } });
export const fetchSciFiTV = () => tmdbApi.get('/discover/tv', { params: { with_genres: 10765 } });

// Movies page fetches
export const fetchNowPlaying = () => tmdbApi.get('/movie/now_playing');
export const fetchPopularMovies = () => tmdbApi.get('/movie/popular');
export const fetchUpcoming = () => tmdbApi.get('/movie/upcoming');
export const fetchThrillerMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 53 } });
export const fetchSciFiMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 878 } });
export const fetchAnimationMovies = () => tmdbApi.get('/discover/movie', { params: { with_genres: 16 } });

// New & Popular fetches
export const fetchTrendingDay = () => tmdbApi.get('/trending/all/day');
export const fetchTrendingWeek = () => tmdbApi.get('/trending/all/week');

// Details and Search
export const fetchMovieDetails = (id, type = 'movie') =>
  tmdbApi.get(`/${type}/${id}`, { params: { append_to_response: 'videos,credits' } });

export const searchMulti = (query) =>
  tmdbApi.get('/search/multi', { params: { query } });

export default tmdbApi;
