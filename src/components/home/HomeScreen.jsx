import { kidsMovies, marvelMovies } from "../../assets/moviesToSearch";
import PreviewMovies from "../movie/PreviewMovies";

const HomeScreen = () => {
  return (
    <div className="home">
      <PreviewMovies moviesTitle="Marvel" moviesToSearch={marvelMovies} />
      <PreviewMovies moviesTitle="Kids" moviesToSearch={kidsMovies} />
    </div>
  );
};
export default HomeScreen;
