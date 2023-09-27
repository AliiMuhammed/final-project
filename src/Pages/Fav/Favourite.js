import React from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../Actions/favoriteActions"; // Import your removeFromFavorites action

function FavoritePage({ favorites, removeFromFavorites }) {
  const handleRemoveFromFavorites = (movieId) => {
    removeFromFavorites(movieId);
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <div className="favorite-movie-list">
        {favorites.map((movie) => (
          <div key={movie.id} className="favorite-movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <h2>{movie.title}</h2>
            <button onClick={() => handleRemoveFromFavorites(movie.id)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritePage);
