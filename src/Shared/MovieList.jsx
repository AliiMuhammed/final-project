// MovieList.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  console.log(movies);
  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        {movies.map((movie) => (
          <Col md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
