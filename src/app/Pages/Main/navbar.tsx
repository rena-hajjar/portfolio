import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {
    //set items active with use state (handle click: 24:03)
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-return">
              Réna Hajjar
            </Link>
            <div className="navbar-pages-container">
              <div>
                <Link to="/work" className="navbar-option">
                  Work Experience
                </Link>
              </div>
              <div>
                <Link to="/projects" className="navbar-option">
                  Projects
                </Link>
              </div>
              <div>
                <Link to="/coursework" className="navbar-option">
                  Studies
                </Link>
              </div>
              <div>
                <Link to="/my-arts">Arts</Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar