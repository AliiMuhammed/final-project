import React, { useState } from "react";
import logo from "../../Assets/images/logo/logo.png";
import ToggleLanguge from "./ToggleLanguge";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuthUser, removeAuthUser } from "../../Helper/Storage";

import "../Style/navbar.css";

function NavBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const navigate = useNavigate();
  const auth = getAuthUser();

  const LogOut = () => {
    removeAuthUser();
    navigate("/");
  };
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
    // {
    //   id: 3,
    //   name: "TV shows",
    //   path: "/tvshows",
    // },
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
                  <ToggleLanguge fun={setIsNavShowing} />
                </li>
                {/* Authenticated Routes */}
                <li>
                  <div className="icons">
                    {auth && (
                      <>
                        <NavLink
                          title="logout"
                          className={"login-btn bordered-btn nav-btn  "}
                          onClick={() => {
                            setIsNavShowing((prev) => !prev);
                            LogOut();
                          }}
                          to={"/"}
                        >
                          <HiOutlineLogout />
                        </NavLink>
                        <NavLink
                          to={`/profile/${auth.uname}`}
                          onClick={() => setIsNavShowing((prev) => !prev)}
                          className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                          }
                        >
                          <FaUserCircle />
                        </NavLink>
                      </>
                    )}
                    {/* unAuthenticated Routes */}
                    {!auth && (
                      <NavLink
                        title="login"
                        to={"/login"}
                        onClick={() => setIsNavShowing((prev) => !prev)}
                        className={({ isActive }) =>
                          isActive ? "active-nav" : ""
                        }
                      >
                        <HiOutlineLogin />
                      </NavLink>
                    )}
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
