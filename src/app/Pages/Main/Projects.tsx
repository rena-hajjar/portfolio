import React from "react";
import ProjectCard from "./../../components/ProjectCard";
import "./Projects.css";
import pic from './../../data/mereal.png'

export default function Projects() {
  // change the project cards to a map with a list of objects as each card
  return (
    <>
      <div className="projects-container">
        <span className="projects-title">Projects</span>
        <div className="project-cards-container">
          <div className="project-card-row">
            <ProjectCard title={"FoodSave"} background="./../../data/mereal.png"></ProjectCard>
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
          </div>
        </div>
      </div>
    </>
  );
}
