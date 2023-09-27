import React from "react";
import NowPlayingMovies from "../../Shared/NowPlaying.jsx";
import Popular from "../../Shared/Popular";
import TopRated from "../../Shared/TopRated";
import UpComming from "../../Shared/upComming";

function Movies() {
  return (
    <div>
      <NowPlayingMovies />
      <Popular />
      <TopRated />
      <UpComming />
    </div>
  );
}

export default Movies;
