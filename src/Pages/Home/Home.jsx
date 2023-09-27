import React from "react";
import "./Style/home.css";
import HomeSlider from "./Components/HomeSlider";
import Popular from "./../../Shared/Popular";
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
        
      </section>
    </>
  );
}

export default Home;
