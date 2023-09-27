import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTopRated } from "../Actions/movieActions";

import MainHeader from "./MainHeader";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Style/movieSlider.css";
import MovieCard from "./MovieCard";
function MoviesSllider({ topRated, fetchTopRated }) {
  useEffect(() => {
    fetchTopRated();
  }, [fetchTopRated]);

  return (
    <>
      <MainHeader title={"Top Rated"} icon={<BsFillBookmarkStarFill />} />
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper top-rated"
      >
        {topRated.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div className="slide-movie">
                <MovieCard movie={movie} id={movie.id} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
const mapStateToProps = (state) => ({
  topRated: state.movies.topRated,
});

export default connect(mapStateToProps, { fetchTopRated })(MoviesSllider);
