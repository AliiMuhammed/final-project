import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUpcoming } from "../Actions/movieActions"; // Adjust the import path
import MovieList from "./MovieList";
import MainHeader from "./MainHeader";
import { BsFire } from "react-icons/bs";

function Upcoming({ upcoming, fetchUpcoming }) {
  useEffect(() => {
    fetchUpcoming();
  }, [fetchUpcoming]);

  return (
    <>
      <section className="movieList-section">
        <div className="container">
          <MainHeader title={"Upcoming"} icon={<BsFire />} />
          <MovieList movies={upcoming.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  upcoming: state.movies.upcoming, // Use the correct property name 'upcoming'
});

export default connect(mapStateToProps, { fetchUpcoming })(Upcoming);

