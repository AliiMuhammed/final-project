import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/movie";
import TvShow from "./Pages/TvShow/TvShow";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movie />,
      },
      {
        path: "/tvshows",
        element: <TvShow />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
