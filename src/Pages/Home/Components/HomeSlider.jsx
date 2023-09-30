import React, { useEffect, useState } from "react";
import { fetchNowPlaying } from "../../../Actions/movieActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../Style/home-slider.css";
import { MdFavorite } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { getAuthUser } from "../../../Helper/Storage";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../Actions/favoriteActions";

function HomeSlider({
  nowPlaying,
  fetchNowPlaying,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) {
  const language = useSelector((state) => state.language);

  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  const [localFavorites, setLocalFavorites] = useState(favorites);

  // Handle toggling favorite
  const handleToggleFavorite = (movie) => {
    if (localFavorites.some((favMovie) => favMovie.id === movie.id)) {
      removeFromFavorites(movie.id);
      setLocalFavorites(
        localFavorites.filter((favMovie) => favMovie.id !== movie.id)
      );
    } else {
      addToFavorites(movie);
      setLocalFavorites([...localFavorites, movie]);
    }
  };

  const [auth, setAuth] = useState(null); // Initialize auth as null
  useEffect(() => {
    // Fetch the authenticated user data
    const user = getAuthUser();
    setAuth(user); // Set the auth variable with the user data
  }, [auth]); // Use an empty dependency array to fetch user data only once


  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper home"
      >
        {nowPlaying.map((movie) => {
          const isFavorite = localFavorites.some(
            (favMovie) => favMovie.id === movie.id
          );

          return (
            <SwiperSlide key={movie.id}>
              <div
                className="slider-content"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                }}
              >
                <h2 className="title">{movie.title}</h2>
                <div className="rate-date">
                  <div className="rate">
                    <AiFillStar />
                    {movie.vote_average}
                  </div>
                  <div className="date">
                    <BsFillCalendarDateFill />
                    {movie.release_date}
                  </div>
                </div>
                <div className="btns">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="main-btn watch-btn"
                  >
                    {language === "ar-KSA" ? "شاهد الأن" : "Watch Now"}
                  </Link>
                  {auth ? (
                    <>
                      <button
                        className={`main-btn fav-slider-btn ${
                          isFavorite ? "favourite" : ""
                        }`}
                        onClick={() => handleToggleFavorite(movie)}
                      >
                        <MdFavorite />
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const mapStateToProps = (state) => ({
  nowPlaying: state.movies.nowPlaying,
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, {
  fetchNowPlaying,
  addToFavorites,
  removeFromFavorites,
})(HomeSlider);
