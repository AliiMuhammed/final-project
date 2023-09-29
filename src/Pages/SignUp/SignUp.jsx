import React from "react";
import "./style/signup.css";
import SignUpForm from "./components/SignUpForm";
function SignUp() {
  return (
    <>
      <section className="signUp-section">
        <div className="container">
          <SignUpForm />
        </div>
      </section>
    </>
  );
}

export default SignUp;
