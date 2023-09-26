import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }} className="my-2">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
