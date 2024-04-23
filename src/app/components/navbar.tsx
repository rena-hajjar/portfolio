import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {
    //set items active with use state (handle click: 24:03)
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link
              style={{ textDecoration: "none", color: "#011627" }}
              to="/"
              className="navbar-return"
            >
              Réna Sophia Hajjar
            </Link>
            <div className="navbar-pages-container">
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#011627" }}
                  to="/work"
                  className="navbar-option"
                >
                  Work Experience
                </Link>
              </div>
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#011627" }}
                  to="/projects"
                  className="navbar-option"
                >
                  Projects
                </Link>
              </div>
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#011627" }}
                  to="/coursework"
                  className="navbar-option"
                >
                  Studies
                </Link>
              </div>
              <div>
                <Link
                  style={{ textDecoration: "none", color: "#011627" }}
                  to="/my-arts"
                >
                  Arts
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar