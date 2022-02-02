const baseUrl = "https://www.omdbapi.com/";
const apiKey = "apikey=5f37afb2";

export const getMovie = (title, year) => {
  const url = `${baseUrl}?t=${title}&y=${year}&${apiKey}`;

  return fetch(url).then((response) => response.json());
};

export const getMovies = (moviesData) => {
  try {
    let promises = moviesData.map((movie) =>
      fetch(`${baseUrl}?t=${movie.title}&y=${movie.year}&${apiKey}`)
        .then((response) => response.json())
        .catch((error) => error)
    );
    return Promise.all(promises)
      .then((movies) => movies)
      .catch((error) => error);
  } catch (error) {
    console.log("It was not possible to load the movies");
  }
};
