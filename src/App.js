import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AppRouter from "./components/router/AppRouter";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
