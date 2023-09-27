import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTopRated } from "../Actions/movieActions";
import MovieList from "./MovieList";
import MainHeader from "./MainHeader";
import { BsFire } from "react-icons/bs";
function TopRated({ topRated, fetchTopRated }) {
  useEffect(() => {
    fetchTopRated();
  }, [fetchTopRated]);

  return (
    <>
      <section className="movieList-section">
        <div className="container">
          <MainHeader title={"Top Rated"} icon={<BsFire />} />
          <MovieList movies={topRated.slice(0, 8)} />{" "}
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  topRated: state.movies.topRated,
});

export default connect(mapStateToProps, { fetchTopRated })(TopRated);
