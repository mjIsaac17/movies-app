import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "../home/HomeScreen";
import MovieDetails from "../movie/MovieDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/movie/:name" element={<MovieDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
