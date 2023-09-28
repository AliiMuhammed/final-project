import React from "react";
import catimg from "../../../Assets/images/movies/Top Movies Collage.jfif";
import "../style/catCard.css";
import { Link } from "react-router-dom";
function CatCard({ title, link }) {
  return (
    <>
      <Link to={link}>
        <div className="cat-card">
          <img src={catimg} alt="catimg" />
          <div className="content">
            <h1>{title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CatCard;
