import React, { useState } from "react";
import logo from "../../../Assets/images/logo/logo.png";
import "../style/form.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form className="Form" action="" method="post">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
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
          Don't have an account <Link to={"/signUp"}>Sign Up</Link>
        </h5>
      </form>
    </>
  );
}

export default LoginForm;
