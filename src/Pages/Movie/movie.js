import React from "react";
import NowPlayingMovies from "../../Shared/NowPlaying.jsx";
import Popular from "../../Shared/Popular";

function Movies() {
  return (
    <div>
      <NowPlayingMovies />
      <Popular />
    </div>
  );
}

export default Movies;
