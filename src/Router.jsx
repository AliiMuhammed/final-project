import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TvShow from "./Pages/TvShow/TvShow";
import Favourite from "./Pages/Fav/Favourite";
import Movie from "./Pages/Movie/Movie";
import PopularMovies from "./Pages/Popular/PopularMovies";
import UpcomingMovies from "./Pages/Upcoming/UpcomingMovies";

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
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <TvShow />,
      },
      {
        path: "/fav",
        element: <Favourite />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/movies/popular",
        element: <PopularMovies />,
      },
      {
        path: "/movies/upcoming",
        element: <UpcomingMovies />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
