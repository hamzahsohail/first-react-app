import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="m-auto">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
