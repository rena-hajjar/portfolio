import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";
import inject from './../data/injecto.png';
import fresh from './../data/freshsave.png';
import grfn from './../data/grfn.jpeg';

const projects = [
  {
    id: 1,
    title: "Fresh Save",
    background: fresh,
  },
  {
    id: 2,
    title: "Good Reads For Nerds",
    background: grfn,
  },
  {
    id: 3,
    title: "Med-i Injection Simulator",
    background: inject,
  },
];
export default function Projects() {
  // change the project cards to a map with a list of objects as each card
  return (
    <>
      <div className="projects-container">
        <span className="projects-title">Projects</span>
        <div className="project-cards-container">
          {projects.map((project) => (
            <>
              <div className="card-background">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: "pink",
                    backgroundSize: "cover",
                  }}
                >
                  <Image src={project.background} alt="project pic" style={{ height:400, width:400 }}></Image>
                  <p className="project-card-title">{project.title}</p>
                  <span className="project-display"></span>
                </motion.div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
