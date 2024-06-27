import './ProjectCard.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  projectName: string,
  projectLink: string,
  projectInfo: string,
  image: string
}

function ProjectCard() {

  return (
    <>
      <div className="project-card-container">
        <div className="card-background">
          <motion.div whileHover={{ scale: 1.2 }}>
            <p className="project-card-title">FoodSave</p>
            <span className="project-display"></span>
          </motion.div>
        </div>
        {/* <div className="card-image">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image src="/../../data/mereal.png" alt="mereal" width={330} height={330}/>
          </motion.div>
        </div> */}
      </div>
    </>
  );
}

export default ProjectCard;