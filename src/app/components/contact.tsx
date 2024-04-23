import React from "react";
import './contact.css'
import Image from "next/image";
import mail from './../data/mail-send-envelope--envelope-email-message-unopened-sealed-close.png';
import linkin from './../data/linkedin--network-linkedin-professional.png';
import ResumeButton from "@/app/components/ResumeButton";

function ContactMe() {
    return (
      <div>
        <p className="contact-title">Contact</p>
        <div className="contact-item">
          <Image src={mail} alt="Email icon"></Image>
          <p>Email: 21rsh8@queensu.ca</p>
        </div>
        <div className="contact-item">
          <Image src={linkin} alt="LinkedIn icon"></Image>
          <p>LinkedIn: linkedin.com/in/réna-hajjar</p>
        </div>
      </div>
    );
}

export default ContactMe;