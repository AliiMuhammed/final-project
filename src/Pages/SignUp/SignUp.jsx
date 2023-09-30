import React from "react";
import "./style/signup.css";
import SignUpForm from "./components/SignUpForm";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function SignUp() {
  const language = useSelector((state) => state.language); // Get the language from the Redux store

  return (
    <>
      <section className="signUp-section">
        <div className="container">
          <SignUpForm language={language} />
        </div>
      </section>
    </>
  );
}

export default SignUp;
