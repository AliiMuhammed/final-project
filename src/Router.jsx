import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
// import TvShow from "./Pages/TvShow/TvShow";
import Favourite from "./Pages/Fav/Favourite";
import Movie from "./Pages/Movie/Movie";
import PopularMovies from "./Pages/Popular/PopularMovies";
import UpcomingMovies from "./Pages/Upcoming/UpcomingMovies";
import TopRatedMovies from "./Pages/Top rated/TopRatedMovies";
import AboutUs from "./Pages/About Us/AboutUs";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

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
      // {
      //   path: "/tvshows",
      //   element: <TvShow />,
      // },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/fav",
        element: <Favourite />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
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
      {
        path: "/movies/top_rated",
        element: <TopRatedMovies />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
