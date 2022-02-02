import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../assets/loadMovies";
import { marvelMovies } from "../../assets/moviesToSearch";
import Movie from "./Movie";

const PreviewMovies = () => {
  const [movies, setMovies] = useState(null);

  const loadMovies = useCallback(async () => {
    const movies = await getMovies(marvelMovies);
    setMovies(movies);
  }, []);

  // const loadMovies = () => {
  //   const movie = getMovie(marvelMovies[0].title, marvelMovies[0].year);
  //   console.log(movie);
  // };

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <div className="preview-movies-container">
      <div className="title-section">
        <p className="h3 bold hover">
          Marvel movies <span class="show-on-hover">{"→"}</span>
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
