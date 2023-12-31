import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUpcoming } from "../../Actions/movieActions";
import MovieList from "./MovieList";
import MainHeader from "./MainHeading";
import { BsFire } from "react-icons/bs";
import Pagination from "react-bootstrap/Pagination";

function Upcoming({ upcoming, fetchUpcoming }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUpcoming(page);
  }, [fetchUpcoming, page]);

  let currentPAge = page;

  const showPrev = () => {
    if (!currentPAge <= 1) {
      currentPAge--;
      setPage(currentPAge);
    }
  };

  const showNext = () => {
    currentPAge++;
    setPage(currentPAge);
  };

  const showFrist = () => {
    currentPAge = 1;
    setPage(currentPAge);
  };

  const showLast = () => {
    currentPAge = 34; // Use the total_pages value
    setPage(currentPAge);
  };

  return (
    <>
      <section className="movieList-section">
        <div className="container">
          <MainHeader title={"Upcoming"} icon={<BsFire />} />
          <MovieList movies={upcoming} />
        </div>
      </section>
      <div>
        <Pagination className="my-5 container  d-flex justify-content-center text-warning">
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
  upcoming: state.movies.upcoming,
});

export default connect(mapStateToProps, { fetchUpcoming })(Upcoming);
