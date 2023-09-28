import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAiringToday } from "../../Actions/tvShowActions";
import MovieList from "./MovieList";
import { BsFire } from "react-icons/bs";
import MainHeader from "./MainHeading";

function AiringTodayTv({ airing, fetchAiringToday }) {
  useEffect(() => {
    fetchAiringToday();
  }, [fetchAiringToday]);

  return (
    <>
      <section className="movieList-section">
        <div className="container">
          <MainHeader title={"Airing Today TV Shows"} icon={<BsFire />} />
          <MovieList movies={airing.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  airing: state.tvShows.airingToday,
});

export default connect(mapStateToProps, { fetchAiringToday })(AiringTodayTv);
