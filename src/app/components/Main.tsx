import "./Main.css";
import ResumeButton from "@/app/components/ResumeButton";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import React from "react";
import Timeline from "./Timeline";
import ExtraCurriculars from "./ExtraCurriculars";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <div id="#main">
        <div className="main">
          <div className="main-container">
            <div className="intro-text-container">
              <div className="intro-text">
                Hello, I'm
                <div className="name-text">Réna Hajjar</div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 2 }}
                // className="about-text"
              >
                I'm a third-year BLAJHHHHH student at Queen’s University and a
                Fullstack Software Engineer
              </motion.div>
            </div>
            <div className="computer-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 6 }}
                className="computer"
              ></motion.div>
            </div>
          </div>
          <div className="resume-button-container">
            <ResumeButton />
          </div>
        </div>
        <Hero />
        <Timeline />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="extracurriculars">
        <ExtraCurriculars />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
