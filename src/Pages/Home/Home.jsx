import React from "react";
import "./Style/home.css";
import HomeSlider from "./Components/HomeSlider";
import Popular from "./../../Shared/Popular";
import phoneImg from "../../Assets/images/Home/mobile.png";
import MoviesSllider from "../../Shared/MoviesSllider";
function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <HomeSlider />
        </div>
      </section>
      <section className="popular-section">
        <div className="container">
          <Popular />
        </div>
      </section>
      <section className="download">
        <div className="container">
          <div className="left">
            <h1>Download Your Movies Watch Offline.</h1>
            <h2> Enjoy On Your Mobile</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries..
            </p>
            <div className="btns-download">
              <button className="main-btn">Download Now</button>
            </div>
          </div>
          <div className="right">
            <img src={phoneImg} alt="phone-img" />
          </div>
        </div>
      </section>
      <section className="movies-slider">
        <div className="container">
          <MoviesSllider/>
        </div>
      </section>
    </>
  );
}

export default Home;
