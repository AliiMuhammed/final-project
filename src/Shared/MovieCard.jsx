import React from "react";
import "./Style/movieCard.css";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <>
      <Link to={"/home"} className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        <div className="content-card">
          <h1>{movie.title}</h1>
          <button className="main-btn card-btn">
            <MdFavorite />
          </button>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
