const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie">
      <img className="movie__image" src={movie.Poster} alt={movie.Title} />
      <div className="movie__content">
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default Movie;
