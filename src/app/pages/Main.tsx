import "./Main.css";
import ResumeButton from "@/app/components/ResumeButton";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import React from "react";
import Timeline from "../components/Timeline";
import ExtraCurriculars from "../components/ExtraCurriculars";
import { motion } from "framer-motion";
import computerscene from './../data/computer_scene_animation.gif';
import Image from "next/image";

export default function Main() {

  return (
    <>
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
                I'm a third-year Computing student at Queen’s University and a
                Fullstack Software Engineer
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut" }}
            >
              <Image
                src={computerscene}
                alt="ok"
                style={{
                  borderRadius: 14,
                  marginLeft: "10vw",
                  boxShadow: "5px 5px 5px lightslategrey",
                  width: "30vw",
                  height: "auto",
                }}
              />
            </motion.div>
            {/* <div className="computer-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, scaleX: -1 }}
                animate={{ opacity: 1, scale: 1, scaleX: -1 }}
                transition={{ ease:"easeOut"}}
                className="computer"
              ></motion.div>
            </div> */}
          </div>
          <motion.div
            className="resume-button-container"
            initial={{ opacity: 0, y:100 }}
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
      {/* <div id="experience">
        <Experience />
      </div> */}
      <div id="extracurriculars">
        <ExtraCurriculars />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
