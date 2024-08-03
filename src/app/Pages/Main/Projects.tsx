import React from "react";
import "./Projects.css";
import pic from "./../../data/mereal.png";
import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Foodsave",
    background: pic,
  },
  {
    id: 2,
    title: "Book app",
    background: pic,
  },
  {
    id: 3,
    title: "Injection Simulator",
    background: pic,
  },
  {
    id: 4,
    title: "This website (meta!)",
    background: pic,
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
                  <Image src={project.background} alt="project pic"></Image>
                  <p className="project-card-title">{project.title}</p>
                  <span className="project-display"></span>
                </motion.div>
              </div>
            </>
          ))}
          {/* <div className="project-card-row">
            <ProjectCard
              title={"FoodSave"}
              background="./../data/perk-demo.jpeg"
            ></ProjectCard>
            <ProjectCard
              title="Injection Simulator"
              // aboutProject="Project called injectisim coooool"
              // githubLink="https://yourmother.ca"
              // projectPic=""
            ></ProjectCard>
            <ProjectCard
              title="Monty Pytho"
              // aboutProject="Project that is totally incomplete!!!!!"
              // githubLink="https://yourmother.ca"
              // projectPic=""
            ></ProjectCard>
          </div>
          <div className="project-card-row">
            <ProjectCard
              title="ASL Training"
              // aboutProject="Project called foodsave coooool"
              // githubLink="https://yourmother.ca"
              // projectPic=""
            ></ProjectCard>
            <ProjectCard
              title="Readwise Notebook UI"
              // aboutProject="Project called injectisim coooool"
              // githubLink="https://yourmother.ca"
              // projectPic=""
            ></ProjectCard>
            <ProjectCard
              title="This website (meta)"
              // aboutProject="Project that is totally incomplete!!!!!"
              // githubLink="https://yourmother.ca"
              // projectPic=""
            ></ProjectCard>
          </div> */}
        </div>
      </div>
    </>
  );
}
