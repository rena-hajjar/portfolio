import React from "react";
import './Projects.css';
import ProjectCard from "./../../components/ProjectCard";

export default function Projects() {

    // change the project cards to a map with a list of objects as each card
    return (
      <>
        <div className="projects-container">
          <span className="projects-title">Projects</span>
          <div className="project-cards-container">
            <div className="project-card-row">
              <ProjectCard />
              <ProjectCard
                // projectName="Injection Simulator"
                // aboutProject="Project called injectisim coooool"
                // githubLink="https://yourmother.ca"
                // projectPic=""
              ></ProjectCard>
              <ProjectCard
                // projectName="Monty Pytho"
                // aboutProject="Project that is totally incomplete!!!!!"
                // githubLink="https://yourmother.ca"
                // projectPic=""
              ></ProjectCard>
            </div>
            <div className="project-card-row">
              <ProjectCard
                // projectName="ASL Training"
                // aboutProject="Project called foodsave coooool"
                // githubLink="https://yourmother.ca"
                // projectPic=""
              ></ProjectCard>
              <ProjectCard
                // projectName="Readwise Notebook UI"
                // aboutProject="Project called injectisim coooool"
                // githubLink="https://yourmother.ca"
                // projectPic=""
              ></ProjectCard>
              <ProjectCard
                // projectName="This website (meta)"
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