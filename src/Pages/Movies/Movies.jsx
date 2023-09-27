import React from "react";
import NowPlayingMovies from "../../Shared/NowPlaying.jsx";
import Popular from "../../Shared/Popular.jsx";
import TopRated from "../../Shared/TopRated.js";
import UpComming from "../../Shared/upComming.js";

function Movies() {
  return (
    <div>
      {/* <NowPlayingMovies />
      <Popular />
      <TopRated /> */}
      <UpComming />
    </div>
  );
}

export default Movies;
