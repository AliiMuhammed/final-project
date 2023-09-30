import React from "react";
import logo from "../../Assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import "../Style/footer.css";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function Footer() {
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      name: "About Us",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contactUs",
    },
  ];

  const arLinks = [
    {
      id: 1,
      name: "الرئيسية",
      path: "/",
    },
    {
      id: 2,
      name: "الأفلام",
      path: "/movies",
    },
    {
      id: 3,
      name: "من نحن",
      path: "/about",
    },
    {
      id: 4,
      name: "تواصل معنا",
      path: "/contactUs",
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <ul>
            {language === "ar-KSA" ? (
              <>
                <li>نيويورك، نيويورك ٧٥٤</li>
                <li>الهاتف:+٢٥٥ ٧٥٤ ٦٦١ ٤٢٣</li>
                <li>البريد الإلكتروني: info@moviehub.com</li>
              </>
            ) : (
              <>
                <li>New York, NY 10007</li>
                <li>Tell: +255 754 661 423</li>
                <li>Email: info@moviehub.com</li>
              </>
            )}
          </ul>
        </div>
        <div className="fast-links">
          <h4>{language === "ar-KSA" ? "الوصول السريع" : "Fast links"}</h4>
          <ul>
            {language === "ar-KSA"
              ? arLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  );
                })
              : links.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className="support">
          <h4>
            {language === "ar-KSA" ? "هل تواجه مشكلة؟" : "Have any problem?"}
          </h4>
          <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
            ali.muhammed.dev@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
