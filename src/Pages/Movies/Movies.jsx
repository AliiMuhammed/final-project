// import React, { useEffect, useState } from "react";
// import MainHeader from "../../Shared/Components/MainHeader.jsx";
// import MainHeading from "../../Shared/Components/MainHeading.jsx";
// import { BiSolidCategoryAlt } from "react-icons/bi";
// import CatCard from "./components/CatCard.jsx";
// import "./style/movies.css";
// import Pagination from "react-bootstrap/Pagination";
// import { fetchSearch } from "../../Actions/movieActions.js";
// import MovieCard from "../../Shared/Components/MovieCard.jsx";
// import { connect } from "react-redux";
// import Alert from "react-bootstrap/Alert";

// function Movies({ search, fetchSearch }) {
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     fetchSearch(page, query);
//   }, [fetchSearch, page, query]);

//   const handleSearchInputBlur = () => {
//     if (query.trim() === "") {
//       setPage(1);
//       fetchSearch(page, query);
//     }
//   };
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // You can change this to "auto" for instant scrolling
//     });
//   };

//   let currentPAge = page;

//   const showFrist = () => {
//     currentPAge = 1;
//     setPage(currentPAge);
//     scrollToTop(); // Scroll to top when first button is clicked
//   };

//   const showPrev = () => {
//     if (currentPAge > 1) {
//       currentPAge--;
//       setPage(currentPAge);
//       scrollToTop(); // Scroll to top when previous button is clicked
//     }
//   };

//   const showNext = () => {
//     currentPAge++;
//     setPage(currentPAge);
//     scrollToTop(); // Scroll to top when next button is clicked
//   };

//   const showLast = () => {
//     currentPAge = 34; // Use the total_pages value
//     setPage(currentPAge);
//     scrollToTop(); // Scroll to top when last button is clicked
//   };

//   const displayMovies = () => {
//     return (
//       <>
//         <div className="search-res">
//           {search.map((movie) => {
//             return <MovieCard movie={movie} key={movie.id} id={movie.id} />;
//           })}
//         </div>
//         <div className="Pagination-movies">
//           <Pagination className="my-5 container  d-flex justify-content-center pagination-color">
//             <Pagination.First
//               onClick={showFrist}
//               disabled={currentPAge === 1 ? true : false}
//             />
//             <Pagination.Prev
//               onClick={showPrev}
//               disabled={currentPAge === 1 ? true : false}
//             />
//             <Pagination.Item>{currentPAge}</Pagination.Item>
//             <Pagination.Next
//               onClick={showNext}
//               disabled={currentPAge === 34 ? true : false} // Use total_pages
//             />
//             <Pagination.Last
//               onClick={showLast}
//               disabled={currentPAge === 34 ? true : false} // Use total_pages
//             />
//           </Pagination>
//         </div>
//       </>
//     );
//   };

//   const handleSearchInputKeyDown = (e) => {
//     if (e.key === "Enter") {
//       fetchSearch(page, query);
//       scrollToTop();
//     }
//   };

//   return (
//     <>
//       <MainHeader header={"Movies"} />
//       <div className="search container">
//         <input
//           type="search"
//           placeholder="Search Movie Name from here"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleSearchInputKeyDown}
//           onBlur={handleSearchInputBlur}
//           id="search-input"
//         />
//       </div>

//       <section className="movies-section">
//         <div className="container">
//           {search.length === 0 && query.trim() !== "" && (
//             <div className="alert">
//               <Alert variant="danger" className="alert-primary">
//                 {`There are no movies called "${query}"`}
//               </Alert>
//             </div>
//           )}

//           {search.length === 0 && (
//             <>
//               <MainHeading title={"categories"} icon={<BiSolidCategoryAlt />} />
//               <div className="movies-cat-cards">
//                 <CatCard title={"popular movies"} link={"/movies/popular"} />
//                 <CatCard title={"upcoming movies"} link={"/movies/upcoming"} />
//                 <CatCard
//                   title={"top rated movies"}
//                   link={"/movies/top_rated"}
//                 />
//               </div>
//             </>
//           )}

//           {search.length !== 0 && search.length > 0 && displayMovies()}
//         </div>
//       </section>
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   search: state.movies.search, // Use the correct reducer name if needed
// });

// export default connect(mapStateToProps, { fetchSearch })(Movies);

import React, { useEffect, useState } from "react";
import MainHeader from "../../Shared/Components/MainHeader.jsx";
import MainHeading from "../../Shared/Components/MainHeading.jsx";
import { BiSolidCategoryAlt, BiSearchAlt } from "react-icons/bi";
import CatCard from "./components/CatCard.jsx";
import "./style/movies.css";
import Pagination from "react-bootstrap/Pagination";
import { fetchSearch } from "../../Actions/movieActions.js";
import MovieCard from "../../Shared/Components/MovieCard.jsx";
import { connect, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import MovieList from "../../Shared/Components/MovieList.jsx";

function Movies({ search, fetchSearch }) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const language = useSelector((state) => state.language);
  const genres_api = "https://api.themoviedb.org/3/genre/movie/list";
  const discover_api = "https://api.themoviedb.org/3/discover/movie";
  const key = "4aa3fd8db30994a6860649f1e8d70cd6";
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchSearch(page, query);
  }, [fetchSearch, page, query, language]);

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
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies data:", error);
      });
  }, [language, selectedGenres, page]);

  const toggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const handleSearchInputBlur = () => {
    if (query.trim() === "") {
      setPage(1);
      fetchSearch(page, query);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" for instant scrolling
    });
  };

  let currentPAge = page;

  const showFrist = () => {
    currentPAge = 1;
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when first button is clicked
  };

  const showPrev = () => {
    if (currentPAge > 1) {
      currentPAge--;
      setPage(currentPAge);
      scrollToTop(); // Scroll to top when previous button is clicked
    }
  };

  const showNext = () => {
    currentPAge++;
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when next button is clicked
  };

  const showLast = () => {
    currentPAge = 34; // Use the total_pages value
    setPage(currentPAge);
    scrollToTop(); // Scroll to top when last button is clicked
  };

  const displayMovies = () => {
    return (
      <>
        <MainHeading
          title={`Search Result for "${query}"`}
          icon={<BiSearchAlt />}
        />
        <div className="search-res">
          {search.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} id={movie.id} />;
          })}
        </div>
        <div className="Pagination-movies">
          <Pagination className="my-5 container  d-flex justify-content-center pagination-color">
            <Pagination.First
              onClick={showFrist}
              disabled={currentPAge === 1}
            />
            <Pagination.Prev onClick={showPrev} disabled={currentPAge === 1} />
            <Pagination.Item>{currentPAge}</Pagination.Item>
            <Pagination.Next
              onClick={showNext}
              disabled={currentPAge === 34} // Use total_pages
            />
            <Pagination.Last
              onClick={showLast}
              disabled={currentPAge === 34} // Use total_pages
            />
          </Pagination>
        </div>
      </>
    );
  };

  const displayGenre = () => {
    return (
      <div className="container movies-container">
        <div className="mt-5">
          <MovieList movies={movies} />
        </div>
        <div className="Pagination-movies">
          <Pagination className="my-5 container  d-flex justify-content-center pagination-color">
            <Pagination.First
              onClick={showFrist}
              disabled={currentPAge === 1}
            />
            <Pagination.Prev onClick={showPrev} disabled={currentPAge === 1} />
            <Pagination.Item>{currentPAge}</Pagination.Item>
            <Pagination.Next
              onClick={showNext}
              disabled={currentPAge === 34} // Use total_pages
            />
            <Pagination.Last
              onClick={showLast}
              disabled={currentPAge === 34} // Use total_pages
            />
          </Pagination>
        </div>
      </div>
    );
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearch(page, query);
      scrollToTop();
    }
  };

  return (
    <>
      <MainHeader header={"Movies"} />.
      <div className="container tags-container">
        <div id="tags" className="tags">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={` tag ${
                selectedGenres.includes(genre.id) ? "selected" : ""
              }`}
              onClick={() => toggleGenre(genre.id)}
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <div className="search container">
        <input
          type="search"
          placeholder="Search Movie Name from here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearchInputKeyDown}
          onBlur={handleSearchInputBlur}
          id="search-input"
        />
      </div>
      <section className="movies-section">
        <div className="container">
          {search.length === 0 && query.trim() !== "" && (
            <div className="alert">
              <Alert variant="danger" className="alert-primary">
                {`There are no movies called "${query}"`}
              </Alert>
            </div>
          )}
          {movies.length === 0 && selectedGenres.length > 0 && (
            <div className="alert">
              <Alert variant="danger" className="alert-primary">
                {`There are no movies in this tags "${selectedGenres}"`}
              </Alert>
            </div>
          )}

          {movies.length > 0 && selectedGenres.length > 0 && displayGenre()}

          {search.length === 0 && selectedGenres.length === 0 && (
            <>
              <MainHeading title={"categories"} icon={<BiSolidCategoryAlt />} />
              <div className="movies-cat-cards">
                <CatCard title={"popular movies"} link={"/movies/popular"} />
                <CatCard title={"upcoming movies"} link={"/movies/upcoming"} />
                <CatCard
                  title={"top rated movies"}
                  link={"/movies/top_rated"}
                />
              </div>
            </>
          )}

          {search.length !== 0 && search.length > 0 && displayMovies()}
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  search: state.movies.search, // Use the correct reducer name if needed
});

export default connect(mapStateToProps, { fetchSearch })(Movies);
