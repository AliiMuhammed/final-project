import React, { useState } from "react";
import "../Style/movieCard.css";
import { MdFavorite } from "react-icons/md";
import { connect } from "react-redux";
import { getAuthUser } from "../../Helper/Storage";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Actions/favoriteActions";
import { Link } from "react-router-dom";

function MovieCard({
  movie,
  favorites,
  addToFavorites,
  removeFromFavorites,
  id,
}) {
  const auth = getAuthUser();

  const [isFavorite, setIsFavorite] = useState(false);

  const isMovieInFavorites = favorites.some(
    (favMovie) => favMovie.id === movie.id
  );

  useState(() => {
    setIsFavorite(isMovieInFavorites);
  }, [isMovieInFavorites]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }

    setIsFavorite(!isFavorite);
  };

  const favoriteClass = isFavorite ? "favourite" : "";

  

  return (
    <>
      <div className={`movie-card ${favoriteClass}`}>
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <div className="content-card">
          <h1>{movie.title}</h1>
          {auth ? (
            <>
              <button
                className={`main-btn card-btn ${favoriteClass}`}
                onClick={handleToggleFavorite}
              >
                <MdFavorite />
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
