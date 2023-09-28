import React from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../Actions/favoriteActions";
import { setLanguage } from "../../Actions/languageActions";
import { useDispatch } from "react-redux"; 

function FavoritePage({ favorites, removeFromFavorites, language }) {
  const dispatch = useDispatch(); 

  const handleRemoveFromFavorites = (movieId) => {
    removeFromFavorites(movieId);
  };

  const handleToggleLanguage = () => {
    const newLanguage = language === "en-US" ? "ar-SA" : "en-US";
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div>
      <h1>{language === "en-US" ? "Favorite Movies" : "أفلام المفضلة"}</h1>
      <button onClick={handleToggleLanguage}>Toggle Language</button>
      <div className="favorite-movie-list">
        {favorites.map((movie) => (
          <div key={movie.id} className="favorite-movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <h2>{movie.title}</h2>
            <button onClick={() => handleRemoveFromFavorites(movie.id)}>
              {language === "en-US"
                ? "Remove from Favorites"
                : "إزالة من المفضلة"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
  language: state.language,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritePage);

