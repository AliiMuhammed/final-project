import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNowPlaying } from "../Actions/movieActions";
import MovieList from "./MovieList";

function NowPlayingMovies({ nowPlaying, fetchNowPlaying }) {
  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      <MovieList movies={nowPlaying.slice(0, 8)} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  nowPlaying: state.movies.nowPlaying,
});

export default connect(mapStateToProps, { fetchNowPlaying })(NowPlayingMovies);

