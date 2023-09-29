import React, { useState } from "react";
import logo from "../../../Assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { handleForm } from "./ValideteSignUpForm";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [allUsersData, setAllUsersData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    handleForm(e, setAllUsersData, allUsersData, setSuccessMessage);
  };

  return (
    <>
      <form className="Form signUp-form" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="success-msg" style={{ textAlign: "center" }}>
          {successMessage}
        </p>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
        />
        <p className="error-msg" id="userNameError"></p>
        <input type="email" name="Email" id="userEmail" placeholder="Email" />
        <p className="error-msg" id="userEmailError"></p>
        <input
          type={showPassword ? "text" : "password"}
          name="pass"
          id="Pass"
          placeholder="Password"
        />
        <p className="error-msg" id="userPasswordError"></p>
        <input
          type="file"
          name="img"
          id="userImage"
          placeholder="upload your image"
        />
        <p className="error-msg" id="userImageError"></p>
        <div className="show-pass">
          <input
            type="checkbox"
            name="showPass"
            id="show"
            onChange={toggleShowPassword}
          />
          <label htmlFor="show">Show Password</label>
        </div>
        <input type="submit" value="Sign Up" className="main-btn" />
        <h5>
          Already have an account? <Link to={"/login"}>Log in</Link>
        </h5>
      </form>
    </>
  );
}

export default SignUpForm;
