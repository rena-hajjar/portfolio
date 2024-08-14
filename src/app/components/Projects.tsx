import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";
import inject from "./../data/injecto.png";
import fresh from "./../data/freshsave.png";
import grfn from "./../data/grfn.jpeg";
import arduino from "./../data/arduino.png";
import { Button, Dialog, DialogTitle } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Fresh Save",
    about: "This is my project",
    ghlink: "github.com/rena-hajjar/portfolio",
    background: fresh,
  },
  {
    id: 2,
    title: "Good Reads For Nerds",
    about: "This is my project",
    ghlink: "github.com/rena-hajjar/portfolio",
    background: grfn,
  },
  {
    id: 3,
    title: "Med-i Injection Simulator",
    about: "This is my project",
    ghlink: "github.com/rena-hajjar/portfolio",
    background: inject,
  },
  // {
  //   id: 4,
  //   title: "Arduino Exploration",
  //   about: "This is an exploration into the world of hardware for me, a mostly software-oriented person.",
  //   ghlink: "",
  //   background: arduino,
  // },
  // {
  //   id: 5,
  //   title: "ASL Translator",
  //   about: "Blahhhh",
  //   ghlink: "",
  //   background: inject,
  // }
];

export default function Projects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClose() {
    setIsDialogOpen(false);
  }

  function handleClick() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <div className="projects-container">
        <span className="projects-title">Projects.</span>
        <div className="project-cards-container">
          {projects.map((project) => (
            <>
              <div className="card-background">
                <motion.div
                  className="motion-card"
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: "pink",
                    backgroundSize: "cover",
                  }}
                >
                  <Image
                    src={project.background}
                    alt="project pic"
                    style={{ height: 400, width: 400 }}
                  ></Image>
                  <p className="project-card-title">{project.title}</p>
                  <Button
                    className="project-more"
                    onClick={handleClick}
                    variant="contained"
                  >
                    See More
                  </Button>
                </motion.div>
              </div>

              <Dialog className="project-dialog" open={isDialogOpen} onClose={handleClose}>
                <DialogTitle>{project.title}</DialogTitle>
                {project.about}
                <Button>GitHub logo</Button>
              </Dialog>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
