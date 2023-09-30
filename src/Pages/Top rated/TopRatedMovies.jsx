import React, { useEffect, useState } from "react";
import MainHeader from "../../Shared/Components/MainHeader";
import Pagination from "react-bootstrap/Pagination";
import MovieList from "../../Shared/Components/MovieList";
import { connect } from "react-redux";
import { fetchTopRated } from "../../Actions/movieActions";
import "./style/topratedMovies.css";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function TopRatedMovies({ topRated, fetchTopRated }) {
  const [page, setPage] = useState(1);
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  useEffect(() => {
    fetchTopRated(page);
  }, [fetchTopRated, page]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" for instant scrolling
    });
  };

  let currentPAge = page;

  const showFrist = () => {
    currentPAge = 1;
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when first button is clicked
  };

  const showPrev = () => {
    if (currentPAge > 1) {
      currentPAge--;
      setPage(currentPAge);
      scrollToTop(); // Scroll to top when previous button is clicked
    }
  };

  const showNext = () => {
    currentPAge++;
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when next button is clicked
  };

  const showLast = () => {
    currentPAge = 34; // Use the total_pages value
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when last button is clicked
  };

  return (
    <>
      <MainHeader
        header={language === "ar-KSA" ? "الأعلى تقييمًا" : "Top Rated movies"}
      />
      <section className="upcoming-Movies">
        <div className="container">
          <MovieList movies={topRated} />
        </div>
      </section>
      <div className="Pagination-movies">
        <Pagination className="my-5 container  d-flex justify-content-center pagination-color">
          <Pagination.First
            onClick={showFrist}
            disabled={currentPAge === 1 ? true : false}
          />
          <Pagination.Prev
            onClick={showPrev}
            disabled={currentPAge === 1 ? true : false}
          />
          <Pagination.Item>{currentPAge}</Pagination.Item>
          <Pagination.Next
            onClick={showNext}
            disabled={currentPAge === 34 ? true : false} // Use total_pages
          />
          <Pagination.Last
            onClick={showLast}
            disabled={currentPAge === 34 ? true : false} // Use total_pages
          />
        </Pagination>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  topRated: state.movies.topRated,
});

export default connect(mapStateToProps, { fetchTopRated })(TopRatedMovies);
