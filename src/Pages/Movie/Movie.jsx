import React, { useState, useEffect } from "react";
import "./movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faFrown,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const key = "4aa3fd8db30994a6860649f1e8d70cd6";
  const imagePath = "https://image.tmdb.org/t/p/w500";
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: key,
        },
      })
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section
      className="movie-section"
      style={{ backgroundImage: `url(${imagePath}${movie.backdrop_path})` }}
    >
      <div className="movie-overlay"></div>
      <div className="container">
        <div className="movie-container">
          <div className="movie-poster">
            <img
              src={`${imagePath}${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="movie-details">
            <h2 className="movie-title">{movie.original_title}</h2>
            <p className="movie-tagline">{movie.tagline}</p>
            <p className="movie-rating">Rate: {movie.vote_average} / 10</p>
            <div className="movie-reactions">
              <FontAwesomeIcon className="movie-icon" icon={faSmile} />
              <span className="movie-reaction-count">124</span>
              <span className="movie-divider">|</span>
              <FontAwesomeIcon
                className="movie-icon text-warning"
                icon={faFrown}
              />
              <span className="movie-reaction-count ">3</span>
            </div>
            <p className="movie-description">Description: {movie.overview}</p>
            <div className="movie-actors">
              <strong>Actors: </strong>Matthew McConaughey, Anne Hathaway,
              Jessica Chastain
            </div>
            <button className="movie-button main-btn">
              <FontAwesomeIcon className="me-2" icon={faDownload} />
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
