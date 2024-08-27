import "./Contact.css";
import Github from "./../data/svgs/github";
import Linkedin from "../data/svgs/linkedin";
import Email from "../data/svgs/email";
import { SvgIcon } from "@mui/material";
import ResumeButton from "./ResumeButton";
import { motion } from "framer-motion";
import Download from "./Download";

export default function Contact() {
  const handleClick = () => {
    window.open("/RénaHajjar-Resume.pdf", "_blank");
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-overlay">
          <div className="contact-title-container">
            <div className="contact-title">Contact Me</div>
          </div>
          <div className="socials-container">
            <div className="socials">
              <a
                href="https://github.com/rena-hajjar"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="social-option">
                  <Github className="social-image"></Github>
                  <div className="social-title">GITHUB: </div>
                  <div className="social-user">rena-hajjar</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/rena-hajjar"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="social-option">
                  <Linkedin className="social-image"></Linkedin>
                  <div className="social-title">LINKEDIN: </div>
                  <div className="social-user">rena-hajjar</div>
                </div>
              </a>
              <a
                href="mailto:21rsh8@queensu.ca"
                style={{ textDecoration: "none" }}
              >
                <div className="social-option">
                  <Email className="social-image" />
                  <div className="social-title">EMAIL: </div>
                  <div className="social-user">21rsh8@queensu.ca</div>
                </div>
              </a>
            </div>
            <div
              className="contact-resume-blurb"
              style={{ marginLeft: "4vw", color: "black" }}
            >
              Download my Resume here.
            </div>
            <div className="resume-social-container">
              <div className="contact-resume-button">
                <motion.button
                  onClick={handleClick}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="contact-resume-text">Resume</div>
                  <Download color="#E5E1F8"/>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
