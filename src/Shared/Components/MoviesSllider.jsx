import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux"; // Import useSelector to access the Redux store
import { fetchTopRated } from "../../Actions/movieActions";
import MainHeader from "./MainHeading";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Style/movieSlider.css";
import MovieCard from "./MovieCard";
function MoviesSllider({ topRated, fetchTopRated }) {
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  useEffect(() => {
    fetchTopRated();
  }, [fetchTopRated]);

  return (
    <>
      <MainHeader
        title={language === "ar-KSA" ? "الأعلى تقييمًا" : "Top rated"}
        icon={<BsFillBookmarkStarFill />}
      />
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
        pagination={false}
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
