import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPopular } from "../../Actions/movieActions";
import MovieList from "./MovieList";
import MainHeader from "./MainHeading";
import { BsFire } from "react-icons/bs";
function Popular({ popular, fetchPopular }) {
  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  return (
    <>
      <div className="movieList-section">
        <div className="container">
          <MainHeader title={"popular"} icon={<BsFire />} />
          <MovieList movies={popular.slice(0, 8)} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  popular: state.movies.popular,
});

export default connect(mapStateToProps, { fetchPopular })(Popular);
