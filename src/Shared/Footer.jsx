import React from "react";
import logo from "../Assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import "./Style/footer.css"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <ul>
            <li>Lorem 196 Andrew Road, Suite</li>
            <li>New York, NY 10007</li>
            <li>Tell: +255 754 661 423</li>
            <li>Email: info@moviehub.com</li>
          </ul>
        </div>
        <div className="fast-links">
          <h4>Fast links</h4>
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""}>movies</Link>
            </li>
            <li>
              <Link to={""}>tv shows</Link>
            </li>
            <li>
              <Link to={""}>about us</Link>
            </li>
            <li>
              <Link to={""}>contact us</Link>
            </li>
          </ul>
        </div>
        <div className="support">
          <h4>Have any problem?</h4>
          <Link to={"mailto:ali.muhammed.dev@gmail.com"}>
            ali.muhammed.dev@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
