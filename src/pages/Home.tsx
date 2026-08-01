import MovieCard from "../components/MovieCard";
import { useState, type FormEvent, useEffect } from "react";
import "../css/Home.css";
import {
  searchMovies,
  getPopularMovies,
  getMovieGenres,
} from "../services/api";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genre_ids?: number[];
}

interface Genre {
  id: number;
  name: string;
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Record<number, string>>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const [popularMovies, genreList] = await Promise.all([
          getPopularMovies(),
          getMovieGenres(),
        ]);

        setMovies(popularMovies);
        setGenres(
          Object.fromEntries(
            genreList.map((genre: Genre) => [genre.id, genre.name]),
          ) as Record<number, string>,
        );
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResult = await searchMovies(searchQuery);

      setMovies(searchResult);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} genres={genres} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
