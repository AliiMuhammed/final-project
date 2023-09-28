import React from "react";
import MainHeader from "../../Shared/Components/MainHeader.jsx";
import MainHeading from "../../Shared/Components/MainHeading.jsx";
import { BiSolidCategoryAlt } from "react-icons/bi";
import CatCard from "./components/CatCard.jsx";
import "./style/movies.css";
function Movies() {
  return (
    <>
      <MainHeader header={"Movies"} />
      <section className="movies-section">
        <div className="container">
          <MainHeading title={"categories"} icon={<BiSolidCategoryAlt />} />
          <div className="movies-cat-cards">
            <CatCard title={"popular movies"} link={"/movies/popular"} />
            <CatCard title={"upcoming movies"} link={"/movies/upcoming"} />
            <CatCard title={"top rated movies"} link={"/movies/top_rated"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
