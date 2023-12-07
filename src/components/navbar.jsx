import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill bg-secondary m-2">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
