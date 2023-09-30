import React, { useEffect } from "react";
import { fetchNowPlaying } from "../../../Actions/movieActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../Style/home-slider.css";
import { MdFavorite } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector,connect } from "react-redux"; // Import useSelector to access the Redux store

function HomeSlider({ nowPlaying, fetchNowPlaying }) {

  const language = useSelector((state) => state.language); // Get the language from the Redux store

  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  console.log(nowPlaying);
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
          return (
            <SwiperSlide key={movie.id}>
              <div className="slider-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                />
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
                    {language === "ar-KSA"?"شاهد الأن":"Watch Now"}
                  </Link>
                  <button className="main-btn fav-slider-btn">
                    <MdFavorite />
                  </button>
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
});
export default connect(mapStateToProps, { fetchNowPlaying })(HomeSlider);
