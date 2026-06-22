import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

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
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
