import React from "react";
import './contact.css'
import Image from "next/image";

function ContactMe() {
    return (
      <div>
        <p className="contact-title">Contact</p>
        <div className="contact-item">
          <p>Email: 21rsh8@queensu.ca</p>
        </div>
        <div className="contact-item">
          <p>LinkedIn: linkedin.com/in/réna-hajjar</p>
        </div>
      </div>
    );
}

export default ContactMe;