import React, { useEffect, useState } from "react";
import MainHeader from "../../Shared/Components/MainHeader.jsx";
import MainHeading from "../../Shared/Components/MainHeading.jsx";
import { BiSolidCategoryAlt } from "react-icons/bi";
import CatCard from "./components/CatCard.jsx";
import "./style/movies.css";
import Pagination from "react-bootstrap/Pagination";
import { fetchSearch } from "../../Actions/movieActions.js";
import MovieCard from "../../Shared/Components/MovieCard.jsx";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

function Movies({ search, fetchSearch }) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchSearch(page, query);
  }, [fetchSearch, page, query]);

  const handleSearchInputBlur = () => {
    if (query.trim() === "") {
      setPage(1);
      fetchSearch(page, query);
    }
  };
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

  const displayMovies = () => {
    return (
      <>
        <div className="search-res">
          {search.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} id={movie.id} />;
          })}
        </div>
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
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearch(page, query);
      scrollToTop();
    }
  };

  return (
    <>
      <MainHeader header={"Movies"} />
      <div className="search container">
        <input
          type="search"
          placeholder="Search Movie Name from here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearchInputKeyDown}
          onBlur={handleSearchInputBlur}
          id="search-input"
        />
      </div>

      <section className="movies-section">
        <div className="container">
          {search.length === 0 && query.trim() !== "" && (
            <div className="alert">
              <Alert variant="danger" className="alert-primary">
                {`There are no movies called "${query}"`}
              </Alert>
            </div>
          )}

          {search.length === 0 && (
            <>
              <MainHeading title={"categories"} icon={<BiSolidCategoryAlt />} />
              <div className="movies-cat-cards">
                <CatCard title={"popular movies"} link={"/movies/popular"} />
                <CatCard title={"upcoming movies"} link={"/movies/upcoming"} />
                <CatCard
                  title={"top rated movies"}
                  link={"/movies/top_rated"}
                />
              </div>
            </>
          )}

          {search.length !== 0 && search.length > 0 && displayMovies()}
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  search: state.movies.search, // Use the correct reducer name if needed
});

export default connect(mapStateToProps, { fetchSearch })(Movies);
