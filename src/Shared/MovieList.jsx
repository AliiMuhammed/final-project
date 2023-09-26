// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <>
      <section className="popular-movies-section">
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}  key={movie.id}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default MovieList;
