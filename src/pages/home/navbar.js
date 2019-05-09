import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../../App.css";
import Contact from "../contact";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav
          className="navbar is-dark is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/home" id="homePage">
              Picket Fence Entertainment
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="contact" href="/contact">
                Contact
              </a>
            </div>

            <div className="navbar-item">
              <a className="About" href="/about">
                About
              </a>
            </div>
          </div>

          <div />
        </nav>
      </div>
    );
  }
}

export default Navbar;
