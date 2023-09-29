import React from "react";
import "./style/login.css";
import LoginForm from "./components/LoginForm";
function Login() {
  return (
    <>
      <section className="login-section">
        <div className="container">
          <LoginForm />
        </div>
      </section>
    </>
  );
}

export default Login;
