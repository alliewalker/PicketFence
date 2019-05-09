import React, { Component } from "react";
import "../../App.css";
import "./main";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav
          className="navbar is-black is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/home" id="homePage">
              <img
                src={require("../../assets/fence.png")}
                className="fence"
                style={{ height: "300px" }}
              />
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
              <a className="contact" href="/contact" style={{ color: "white" }}>
                Contact
              </a>
            </div>

            <div className="navbar-item">
              <a className="About" href="/about" style={{ color: "white" }}>
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
