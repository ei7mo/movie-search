import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import type { MouseEvent } from "react";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genre_ids?: number[];
}

function MovieCard({
  movie,
  genres = {},
}: {
  movie: Movie;
  genres?: Record<number, string>;
}) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const genreNames =
    movie.genre_ids?.map((genreId) => genres[genreId]).filter(Boolean) ?? [];

  function onFavoriteClick(e: React.MouseEvent) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤️
          </button>
          <span className="user-rating">
            ★ {movie.vote_average?.toFixed(1) ?? "N/A"}
          </span>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        {genreNames.length > 0 && (
          <div className="genre-list">
            {genreNames.map((genre) => (
              <span className="genre-tag" key={genre}>
                {genre}
              </span>
            ))}
          </div>
        )}
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
