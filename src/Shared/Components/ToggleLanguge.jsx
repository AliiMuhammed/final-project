import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../Actions/languageActions";
import { fetchNowPlaying } from "../../Actions/movieActions";

function LanguageToggle() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const newLanguage = language === "en-US" ? "ar-KSA" : "en-US";
  const toggleLanguage = () => {
    dispatch(setLanguage(newLanguage));
    fetchNowPlaying(1, newLanguage);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
      <p>Current Language: {language}</p>
    </div>
  );
}

export default LanguageToggle;
