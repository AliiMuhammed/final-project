import React from "react";
import { Link } from "react-router-dom";
import notfoundImg from "../../Assets/images/not found/notFound.png";
import "./style/notfound.css";
function NotFound() {
  return (
    <>
      <section className="notFound-section">
        <div className="container">
          <div className="left">
            <img src={notfoundImg} alt="notFoundImage" />
          </div>
          <div className="right">
            <h1>
              oops! <span> page not found.</span>
            </h1>
            <p>
              Check that you typed the address correctly.go back to your
              previous page or try using our site search to find something
              specific.
            </p>
            <Link to={"/"} className="main-btn back-btn">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
