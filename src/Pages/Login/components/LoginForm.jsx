// LoginForm.js
import React, { useState } from "react";
import logo from "../../../Assets/images/logo/logo.png";
import "../style/form.css";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "./ValidateLogin";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(""); // State to manage login errors
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginValidation = (e) => {
    handleLogin(e, loginError, setLoginError, navigate); // Pass 'navigate' to handleLogin
  };

  return (
    <>
      <form className="Form" onSubmit={handleLoginValidation}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="error-msg " style={{ textAlign: "center" }}>
          {loginError}
        </p>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
        />
        <input
          type={showPassword ? "text" : "password"}
          name="pass"
          id="Pass"
          placeholder="Password"
        />
        <div className="show-pass">
          <input
            type="checkbox"
            name="showPass"
            id="show"
            onChange={toggleShowPassword}
          />
          <label htmlFor="show">Show Password</label>
        </div>
        <input type="submit" value="Login" className="main-btn" />
        <h5>
          Don't have an account <Link to="/signUp">Sign Up</Link>
        </h5>
      </form>
    </>
  );
}

export default LoginForm;
