import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand justify-content-start">
          <a className="navbar-brand" href="./">
            {props.title}
          </a>
        </div>
        <button className="btn btn-secondary" onClick={props.toggleDarkMode}>Toggle Dark Mode</button>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
