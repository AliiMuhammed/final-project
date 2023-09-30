import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux"; // Import useSelector to access the Redux store
import { fetchPopular } from "../../Actions/movieActions";
import MovieList from "./MovieList";
import MainHeader from "./MainHeading";
import { BsFire } from "react-icons/bs";
function Popular({ popular, fetchPopular }) {
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  return (
    <>
      <div className="movieList-section">
        <div className="container">
          <MainHeader
            title={language === "ar-KSA" ? "الأكثر شعبية" : "popular"}
            icon={<BsFire />}
          />
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
