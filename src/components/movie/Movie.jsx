import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate(`movie/${movie.Title}`);
  };
  return (
    <div className="movie" onClick={handleMovieClick}>
      <img className="movie__image" src={movie.Poster} alt={movie.Title} />
      <div className="movie__content">
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default Movie;
