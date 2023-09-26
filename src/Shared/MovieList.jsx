// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import "./Style/movieList.css"
function MovieList({ movies }) {
  
  return (
    <>
      <section className="movieList-section">
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
