import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNowPlaying } from "../../../Actions/movieActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../Style/home-slider.css";
import { MdFavorite } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
function HomeSlider({ nowPlaying, fetchNowPlaying }) {
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
        className="mySwiper"
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
                  <button className="main-btn watch-btn">Watch</button>
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
