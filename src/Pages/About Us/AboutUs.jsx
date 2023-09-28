import React from "react";
import "./style/about.css";
import MainHeader from "../../Shared/Components/MainHeader";
function AboutUs() {
  return (
    <>
      <MainHeader header={"About us"} />
      <section className="about-us-section">
        <div className="container">
          <div className="left">
            <h1>Welcome to our MovieHub</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="numbers">
              <div className="number-card">
                <h1>10K</h1>
                <h3>Listed Movies</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
              <div className="number-card">
                <h1>8K</h1>
                <h3>Lovely Users</h3>
                <p>
                  Completely free, without registration! Lorem Ipsum is simply
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
