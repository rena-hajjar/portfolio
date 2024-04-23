import React from "react";
import { Link } from "react-router-dom";
import './ResumeButton.css'

function ResumeButton() {
    return (
      <Link to='/' style={{ textDecoration:'none' }}>
        <div className="resume-button">
            <p className="resume-text">Download Resume</p>
        </div>
      </Link>
    );
}

export default ResumeButton;