import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../assets/loadMovies";
import Movie from "./Movie";

const PreviewMovies = ({ moviesTitle = "Movies", moviesToSearch = [] }) => {
  const [movies, setMovies] = useState(null);

  const loadMovies = useCallback(async () => {
    const movies = await getMovies(moviesToSearch);
    setMovies(movies);
  }, [moviesToSearch]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <div className="preview-movies-container">
      <div className="title-section">
        <p className="h3 bold hover">
          {moviesTitle} <span className="show-on-hover">{"→"}</span>
        </p>
      </div>
      <div className="movies-section">
        {movies ? (
          movies.map((movie, idx) => (
            <div key={idx}>
              <Movie movie={movie} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PreviewMovies;
