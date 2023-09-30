import React from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../Actions/favoriteActions";
import "./style/profile.css";
import { AiFillHeart } from "react-icons/ai";
import MainHeader from "../../Shared/Components/MainHeader";
import { getAuthUser } from "../../Helper/Storage";
import MainHeading from "../../Shared/Components/MainHeading";
import MovieList from "../../Shared/Components/MovieList";
import Alert from "react-bootstrap/Alert";

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
          {favorites.length === 0 && (
            <div className="alert">
              <Alert variant="danger" className="alert-primary">
                {language === "ar-KSA"
                  ? `لا توجد أفلام مقضلة`
                  : `There are no favorite movies`}
              </Alert>
            </div>
          )}
          {favorites.length > 0 && (
            <div className="favorite-movie-list">
              <MovieList movies={favorites} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
  language: state.language,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritePage);
