import React, { useEffect, useState } from "react";
import MainHeader from "../../Shared/Components/MainHeader";
import Pagination from "react-bootstrap/Pagination";
import MovieList from "../../Shared/Components/MovieList";
import { fetchPopular } from "../../Actions/movieActions";
import { connect } from "react-redux";
import { BsSearch } from "react-icons/bs";
import "./style/popularMovies.css";


function PopularMovies({ popular, fetchPopular }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopular(page);
  }, [fetchPopular, page]);

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
      <MainHeader header={"popular movies"} />
      <div className="search container">
        <input
          type="search"
          placeholder="Search Movie Name from here"
          name="query"
          id="search-input"
        />
        <button className="main-btn search-btn">
          <BsSearch />
        </button>
      </div>
      <section className="popular-Movies">
        <div className="container">
          <MovieList movies={popular} />
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
  popular: state.movies.popular,
});

export default connect(mapStateToProps, { fetchPopular })(PopularMovies);
