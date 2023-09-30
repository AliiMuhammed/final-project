import React from "react";
import "./style/about.css";
import MainHeader from "../../Shared/Components/MainHeader";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function AboutUs() {
  const language = useSelector((state) => state.language); // Get the language from the Redux store
  return (
    <>
      <MainHeader header={language === "ar-KSA" ? "من نحن" : "About us"} />
      <section className="about-us-section">
        <div className="container">
          <div className="left">
            <h1>
              {language === "ar-KSA"
                ? "مرحبا بكم في MovieHub"
                : "Welcome to our MovieHub"}
            </h1>
            <p>
              {language === "ar-KSA"
                ? "MovieHub هو وجهتك النهائية لتجربة لا مثيل لها لمشاهدة الأفلام عبر الإنترنت. على موقع MovieHub، يمكنك بث مجموعة واسعة من أفلامك المفضلة والاستمتاع بها بسهولة دون الحاجة إلى أي تنزيلات أو برامج إضافية. تغطي مكتبتنا الواسعة أنواعًا متنوعة، مما يضمن هناك شيء يلبي جميع الأذواق. قل وداعًا لانقطاعات التخزين المؤقت المحبطة واستمتع بالترفيه دون انقطاع على موقع MovieHub سهل الاستخدام. استكشف الآن واجلب تجربة الأفلام الخاصة بك إلى الشاشة الكبيرة وأنت مرتاح في منزلك."
                : "MovieHub is your ultimate destination for an unparalleled online movie-watching experience. On MovieHub's website, you can effortlessly stream and enjoy a wide selection of your favorite movies without the need for any downloads or additional software. Our extensive library covers diverse genres, ensuring there's something to cater to every taste. Say farewell to frustrating buffering interruptions and embrace uninterrupted entertainment on MovieHub's user-friendly website. Explore now and bring your movie experience to the big screen in the comfort of your home."}
            </p>
            <div className="numbers">
              <div className="number-card">
                <h1>{language === "ar-KSA" ? "١٠ آلاف" : "10K"}</h1>
                <h3>{"Enjoyable Movie"}</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
              <div className="number-card">
                <h1>{language === "ar-KSA" ? "٨ آلاف" : "8K"}</h1>
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
