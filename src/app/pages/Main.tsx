import "./Main.css";
import ResumeButton from "@/app/components/ResumeButton";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import React from "react";
import Timeline from "../components/Timeline";

export default function Main() {
  return (
    <>
      <div id="#main">
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
        <Hero />
        <Timeline />
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
