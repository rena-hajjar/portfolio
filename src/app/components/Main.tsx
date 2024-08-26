import "./Main.css";
import ResumeButton from "@/app/components/ResumeButton";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import React from "react";
import Timeline from "./Timeline";
import ExtraCurriculars from "./ExtraCurriculars";

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
              <div className="about-text">
                I'm a third-year Computing student at Queen’s University and a
                Fullstack Software Engineer
              </div>
            </div>
            <div className="computer-container">
              <div className="computer"></div>
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
