// // Movies.js
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import {
//   fetchNowPlaying,
//   fetchPopular,
//   fetchTopRated,
//   fetchUpcoming,
// } from "../../Actions/movieActions";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Container, Row, Col } from "react-bootstrap";

// function Movies({
//   nowPlaying,
//   popular,
//   topRated,
//   upcoming,
//   fetchNowPlaying,
//   fetchPopular,
//   fetchTopRated,
//   fetchUpcoming,
// }) {
//   useEffect(() => {
//     // Fetch data from the APIs when the component mounts
//     fetchNowPlaying();
//     fetchPopular();
//     fetchTopRated();
//     fetchUpcoming();
//   }, [fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming]);

//   return (
//     <div>
//       <h1>Now Playing Movies</h1>
//       <ul>
//         <Container style={{ marginTop: "70px" }}>
//           <Row>
//             {nowPlaying.map((movie) => (
//               <Col md={4} key={movie.id}>
//                 <Card style={{ width: "18rem" }} className="my-2">
//                   <Card.Img
//                     variant="top"
//                     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                   />
//                   <Card.Body>
//                     <Card.Title>{movie.title}</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </ul>
//       <h1>Popular Movies</h1>
//       <ul>
//         {popular.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>

//       <h1>Top Rated Movies</h1>
//       <ul>
//         {topRated.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>

//       <h1>Upcoming Movies</h1>
//       <ul>
//         {upcoming.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   nowPlaying: state.movies.nowPlaying,
//   popular: state.movies.popular,
//   topRated: state.movies.topRated,
//   upcoming: state.movies.upcoming,
// });

// export default connect(mapStateToProps, {
//   fetchNowPlaying,
//   fetchPopular,
//   fetchTopRated,
//   fetchUpcoming,
// })(Movies);
import React from "react";
import NowPlayingMovies from "../../Shared/NowPlaying.jsx";
import Popular from "../../Shared/Popular";

function Movies() {
  return (
    <div>
      <NowPlayingMovies />
      <Popular />
    </div>
  );
}

export default Movies;
