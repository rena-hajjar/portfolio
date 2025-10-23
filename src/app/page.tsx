"use client";
import "./globals.css";
import "./components/Main.css";
import ResumeButton from "./components/ResumeButton";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import React from "react";
import Timeline from "./components/Timeline";
import ExtraCurriculars from "./components/ExtraCurriculars";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Main() {
  console.log("Main component is rendering");
  return (
    <>
      <NavBar />
      <div id="main">
        <div className="main">
          <div className="main-container">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="intro-text-container"
            >
              <div className="intro-text">
                Hello, I'm
                <div className="name-text">Réna Hajjar</div>
              </div>
              <div className="about-text">
                I'm a third-year Computing student at Queen's University and a
                Fullstack Software Engineer
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut" }}
            >
              <Image
                src="/computer_scene_animation.gif"
                alt="Computer animation"
                width={600}
                height={400}
                style={{
                  borderRadius: 14,
                  marginLeft: "10vw",
                  boxShadow: "5px 5px 5px lightslategrey",
                  width: "30vw",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>
          <motion.div
            className="resume-button-container"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <ResumeButton />
          </motion.div>
        </div>
        <div id="experience">
          <Hero />
          <Timeline />
        </div>
      </div>
      <div id="projects">
        <Projects />
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
