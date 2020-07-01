import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper light-green darken-3 z-depth-0">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                marginLeft: "10px",
              }}
              className="brand-logo"
            >
              MERN
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
