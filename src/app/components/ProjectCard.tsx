import "./ProjectCard.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ title, background }: { title:string; background:string }) {
  return (
    <>
      <div className="project-card-container">
        <div className="card-background">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img src={background} alt="project image" />
            <p className="project-card-title">{title}</p>
            <span className="project-display"></span>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
