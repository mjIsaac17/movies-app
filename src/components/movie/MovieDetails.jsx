import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../assets/loadMovies";

const MovieDetails = () => {
  const { name: movieName } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState(null);

  const loadMovie = useCallback(async () => {
    const movie = await getMovie(movieName);
    setCurrentMovie(movie);
    console.log(movie);
    setLoading(false);
  }, [getMovie]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie, movieName]);

  return (
    <div className="movie-details">
      {loading ? (
        <p>Loading...</p>
      ) : currentMovie && !currentMovie.Error ? (
        <>
          <h1 className="h1">{currentMovie.Title}</h1>
          <img src={currentMovie.Poster} alt={currentMovie.Title} />
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetails;
