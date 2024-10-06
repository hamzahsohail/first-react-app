import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand justify-content-start">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
        </div>
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>

        <button className="btn btn-secondary" onClick={props.toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
