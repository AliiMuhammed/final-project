import React, { useState } from "react";
import logo from "../../Assets/images/logo/logo.png";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import "../Style/navbar.css";
function NavBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      name: "TV shows",
      path: "/tvshows",
    },
    {
      id: 4,
      name: "About Us",
      path: "/about",
    },
    {
      id: 5,
      name: "Contact Us",
      path: "/contactUs",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <Link to={"/"} onClick={() => setIsNavShowing(false)}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="links">
              <ul
                className={`nav-links ${
                  isNavShowing ? "show-nav" : "hide-nav"
                }`}
              >
                {links.map((link) => {
                  return (
                    <>
                      <li key={link.id}>
                        <NavLink
                          key={link.id}
                          to={link.path}
                          className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                          }
                          onClick={() => setIsNavShowing((prev) => !prev)}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    </>
                  );
                })}
                <li>
                  <div className="icons">
                    <Link
                      to={"/login"}
                      onClick={() => setIsNavShowing((prev) => !prev)}
                    >
                      <FiLogIn />
                    </Link>
                    <Link
                      to={"/fav"}
                      onClick={() => setIsNavShowing((prev) => !prev)}
                    >
                      <MdFavorite />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <button
              className="nav-toggle-btn"
              onClick={() => setIsNavShowing((prev) => !prev)}
            >
              {isNavShowing ? <AiFillCloseSquare /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
