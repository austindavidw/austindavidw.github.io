import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar sticky-sm-top navbar-expand-sm bg-light">
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarnav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse justify-content-sm-center collapse"
          id="navbarnav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#Hero"
                className="nav-link"
                style={{
                  color: "black",
                  filter: "brightness(50%)",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#About"
                className="nav-link "
                style={{
                  color: "black",
                  filter: "brightness(50%)",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Projects"
                className="nav-link "
                style={{
                  color: "black",
                  filter: "brightness(50%)",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#CTA"
                className="nav-link "
                style={{
                  color: "black",
                  filter: "brightness(50%)",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
