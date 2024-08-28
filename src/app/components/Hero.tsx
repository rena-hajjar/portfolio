import "./Hero.css";
import Wave from "@/app/components/Wave";
import { motion } from "framer-motion";
import Github from "../data/svgs/github";
import Linkedin from "../data/svgs/linkedin";
import Email from "../data/svgs/email";


export default function Hero() {
  return (
    <>
      <div className="main-hero">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hero-container"
        >
          <div className="hero-blurb">
            <div className="hero-welcome">
              <div className="hero-wave">
                <motion.div whileInView={{ rotate: [0, -25, 65, 0] }}>
                  <Wave></Wave>
                </motion.div>
              </div>
              <div className="welcome-title">Welcome!</div>
            </div>
            This website is as close as we can connect by static media. I’ll try
            my best to give you a full impression of who I am.
          </div>
          <div className="hero-image-container">
            <div className="hero-image"></div>
            <div className="hero-links">
              <div className="hero-link">
                <a href="https://github.com/rena-hajjar" target="_blank">
                  <Github className="social-image"></Github>
                </a>
              </div>
              <div className="hero-link">
                <a href="https://linkedin.com/in/rena-hajjar" target="_blank">
                  <Linkedin className="social-image"></Linkedin>
                </a>
              </div>
              <div className="hero-link">
                <a href="mailto:21rsh8@queensu.ca" target="_blank">
                  <Email className="social-image"></Email>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
