import React from "react";
import logo from "../Assets/images/logo/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

import { Link } from "react-router-dom";
import "./Style/navbar.css";
function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {/* <div className="search">
              <input type="search" placeholder="Search Movie Name from here" name="query" id="search-input" />
              <button className="main-btn search-btn">
                <BsSearch />
              </button>
            </div> */}
            <div className="links">
              <ul>
                <li>
                  <Link to={"/"}>Movies</Link>
                </li>
                <li>
                  <Link to={"/"}>TV shows</Link>
                </li>
                <li>
                  <Link to={"/"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="icons">
              <Link to={"/login"}><FiLogIn/></Link>
              <Link to={"/login"}><MdFavorite/></Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
