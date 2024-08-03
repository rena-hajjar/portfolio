import "./ProjectCard.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

function ProjectCard({ title, background }: { title:string; background:string }) {
  return (
    <>
        <div
          className="card-background"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <p className="project-card-title">{title}</p>
            <span className="project-display"></span>
          </motion.div>
        </div>
    </>
  );
}

export default ProjectCard;
