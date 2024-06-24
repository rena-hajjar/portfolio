import './ProjectCard.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  projectName: string,
  aboutProject: string,
  githubLink: string,
  projectPic: string
}

const hoverMask =
  "linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url('./../data/mereal.png')";
const regMask = 'url("./../data/mereal.png")';

const ProjectCard:React.FC<Props> = ({projectName, aboutProject, githubLink, projectPic}) => {

    return (
      <>
        <div className="project-card-container">
          <motion.div className='project-card-container' whileHover={{ scale: 1.2, background: hoverMask }}>
            <motion.p whileHover={{ visibility: "visible" }}>
              {projectName}
            </motion.p>
            <div className="project-card-display">
              <motion.img></motion.img>
            </div>
          </motion.div>
        </div>
      </>
    );
}

export default ProjectCard;