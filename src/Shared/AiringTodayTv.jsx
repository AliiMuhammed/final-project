import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAiringToday } from "../Actions/tvShowActions"; 
import MovieList from "./MovieList"; 

function AiringTodayTv({ airing, fetchAiringToday }) {
  useEffect(() => {
    
    fetchAiringToday();
  }, [fetchAiringToday]);

  return (
    <div>
      <h1>Airing Today TV Shows</h1>
      <MovieList movies={airing.slice(0, 8)} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  airing: state.tvShows.airingToday, 
});

export default connect(mapStateToProps, { fetchAiringToday })(AiringTodayTv);
