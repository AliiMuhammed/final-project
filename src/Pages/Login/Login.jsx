import React from "react";
import "./style/login.css";
import LoginForm from "./components/LoginForm";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

function Login() {
  const language = useSelector((state) => state.language); // Get the language from the Redux store
  return (
    <>
      <section className="login-section">
        <div className="container">
          <LoginForm language={language} />
        </div>
      </section>
    </>
  );
}

export default Login;
