import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Custom.css";
import MovieList from "../../Shared/Components/MovieList";

function Custom() {
  const language = useSelector((state) => state.language);
  const genres_api = "https://api.themoviedb.org/3/genre/movie/list";
  const discover_api = "https://api.themoviedb.org/3/discover/movie";
  const key = "4aa3fd8db30994a6860649f1e8d70cd6";
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(genres_api, {
        params: {
          api_key: key,
          language: language,
        },
      })
      .then((response) => {
        const genresData = response.data.genres;
        setGenres(genresData);
      })
      .catch((error) => {
        console.error("Error fetching genres data:", error);
      });
  }, [language]);

  useEffect(() => {
    axios
      .get(discover_api, {
        params: {
          api_key: key,
          with_genres: selectedGenres.join(","),
          language: language,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies data:", error);
      });
  }, [language, selectedGenres]); 
  const toggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <>
      <div className="container tags-container">
        <h1 className="mt-5">Movie Tags</h1>
        <div id="tags" className="tags">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={`tag ${
                selectedGenres.includes(genre.id) ? "selected" : ""
              }`}
              onClick={() => toggleGenre(genre.id)}
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <div className="container movies-container">
        <div className="mt-5">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default Custom;
