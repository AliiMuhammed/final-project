import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPopular } from "../Actions/movieActions";
import MovieList from "./MovieList";

function Popular({ popular, fetchPopular }) {
  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  console.log(popular);

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList movies={popular.slice(0,8)} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  popular: state.movies.popular,
});

export default connect(mapStateToProps, { fetchPopular })(Popular);
