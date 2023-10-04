import React from "react";
import "./Style/home.css";
import HomeSlider from "./Components/HomeSlider";
import Popular from "../../Shared/Components/Popular";
import phoneImg from "../../Assets/images/Home/mobile.png";
import MoviesSllider from "../../Shared/Components/MoviesSllider";
import { useSelector } from "react-redux"; 

function Home() {

  const language = useSelector((state) => state.language); 


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
            {language === "ar-KSA" ? (
              <>
                <h1>قم بتنزيل أفلامك وشاهدها دون اتصال.</h1>
                <h2> استمتع على هاتفك المحمول.</h2>
                <p>
                  MovieHub هو تطبيق رائع يتيح لك تنزيل ومشاهدة أفلامك المفضلة
                  بدون اتصال على جهازك المحمول. مع مكتبة ضخمة من الأفلام
                  والمسلسلات عبر مختلف الأنواع، يضمن لك MovieHub عدم تفويت أي
                  ترفيه. استمتع بالأفلام والعروض في أي وقت وفي أي مكان مع
                  MovieHub.
                </p>
                <div className="btns-download">
                  <button className="main-btn">حمل الأن</button>
                </div>
              </>
            ) : (
              <>
                <h1>Download Your Movies Watch Offline.</h1>
                <h2> Enjoy On Your Mobile</h2>
                <p>
                  MovieHub is a fantastic app that lets you download and watch
                  your favorite movies offline on your mobile device. With a
                  vast library of films and TV series across various genres,
                  MovieHub ensures you never miss out on entertainment. Enjoy
                  movies and shows anytime, anywhere with MovieHub
                </p>
                <div className="btns-download">
                  <button className="main-btn">Download Now</button>
                </div>
              </>
            )}
          </div>

          <div className="right">
            <img src={phoneImg} alt="phone-img" />
          </div>
        </div>
      </section>
      <section className="movies-slider">
        <div className="container">
          <MoviesSllider />
        </div>
      </section>
    </>
  );
}

export default Home;

