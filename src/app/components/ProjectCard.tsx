import './ProjectCard.css';
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard(title: string, background: string) {

  return (
    <>
      <div className="project-card-container">
        <div className="card-background" style={{ backgroundImage: background }}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <p className="project-card-title">{title}</p>
            <span className="project-display"></span>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;