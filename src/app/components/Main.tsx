import "./Main.css";
import ResumeButton from "@/app/components/ResumeButton";
import { useEffect } from "react";
import HeroTimeline from "./HeroTimeline";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import React from "react";

export default function Main() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div>
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
          <div className="computer-container" />
          <div className="resume-button-container">
            <ResumeButton />
          </div>
        </div>
        <HeroTimeline />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
