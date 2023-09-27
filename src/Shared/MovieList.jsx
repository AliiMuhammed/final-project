// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import "./Style/movieList.css";
function MovieList({ movies }) {
  return (
    <>
      <div className="movies-cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} id={movie.id} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
