import React from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../Actions/favoriteActions";
import "./style/profile.css";
import { AiFillHeart } from "react-icons/ai";
import MainHeader from "../../Shared/Components/MainHeader";
import { getAuthUser } from "../../Helper/Storage";
import MainHeading from "../../Shared/Components/MainHeading";
import MovieList from "../../Shared/Components/MovieList";
function FavoritePage({ favorites, removeFromFavorites, language }) {
  const handleRemoveFromFavorites = (movieId) => {
    removeFromFavorites(movieId);
  };

  const auth = getAuthUser();
  return (
    <>
      <section className="profile-section">
        <div className="container">
          <MainHeader header={auth.uname} userImg={auth.uImg} />
          <MainHeading
            title={language === "en-US" ? "Favorite Movies" : "أفلام المفضلة"}
            icon={<AiFillHeart />}
          />
          <div className="favorite-movie-list">
            <MovieList movies={favorites}/>
          </div>
          
        </div>
      </section>
      {/* <div className="favorite-movie-list">
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
      </div> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
  language: state.language,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritePage);
