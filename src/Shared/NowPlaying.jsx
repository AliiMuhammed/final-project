import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNowPlaying } from "../Actions/movieActions";
import MovieList from "./MovieList";
import MainHeader from "./MainHeader";
import { BsFillCollectionPlayFill } from "react-icons/bs";

function NowPlayingMovies({ nowPlaying, fetchNowPlaying }) {
  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  return (
    <>
      <section className="movieList-section">
        <div className="container">
          <MainHeader title={"Now Playing"} icon={<BsFillCollectionPlayFill/>}/>
          <MovieList movies={nowPlaying.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  nowPlaying: state.movies.nowPlaying,
});

export default connect(mapStateToProps, { fetchNowPlaying })(NowPlayingMovies);
