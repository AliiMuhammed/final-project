import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../Actions/languageActions";
import {
  fetchNowPlaying,
  fetchUpcoming,
  fetchTopRated,
  fetchPopular,
} from "../../Actions/movieActions";

function LanguageToggle({ fun }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const newLanguage = language === "en-US" ? "ar-KSA" : "en-US";

  const toggleLanguage = () => {
    dispatch(setLanguage(newLanguage));
    dispatch(fetchNowPlaying(1, newLanguage));
    dispatch(fetchPopular(1, newLanguage));
    dispatch(fetchTopRated(1, newLanguage));
    dispatch(fetchUpcoming(1, newLanguage));
  };

  const handelOnClick = () => {
    fun((prev) => !prev);
    toggleLanguage();
  };
  return (
    <div>
      <button className="main-btn lang-btn" onClick={handelOnClick}>
        {language === "en-US" ? `English` : `العربية`}
      </button>
    </div>
  );
}

export default LanguageToggle;
