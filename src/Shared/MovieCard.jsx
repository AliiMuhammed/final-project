import React, { useState } from "react";
import "./Style/movieCard.css";
import { MdFavorite } from "react-icons/md";
import { connect } from "react-redux";
import { addToFavorites } from "../Actions/favoriteActions"; // Import your addToFavorites action
import { Link } from "react-router-dom";

function MovieCard({ movie, favorites, addToFavorites,id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      addToFavorites(movie);
      setIsFavorite(true);
    }
  };

  const isAlreadyFavorite = favorites.some(
    (favMovie) => favMovie.id === movie.id
  );

  return (
    <>
      <div className="movie-card">
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <div className="content-card">
          <h1>{movie.title}</h1>
          {isAlreadyFavorite ? (
            <button className="main-btn card-btn" disabled>
              <MdFavorite />
            </button>
          ) : (
            <button
              className="main-btn card-btn"
              onClick={handleAddToFavorites}
            >
              <MdFavorite />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites, // Update this to match your Redux store structure
});

export default connect(mapStateToProps, { addToFavorites })(MovieCard);
