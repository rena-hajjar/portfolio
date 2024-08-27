import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Image from "next/image";
import inject from "./../data/injecto.png";
import fresh from "./../data/freshsave.png";
import grfn from "./../data/grfn.jpeg";
import Github from "../data/svgs/github";
import {
  Button,
  createTheme,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Fresh Save",
    about:
      "This project was built to tackle food waste in Kingston during a 48-hour sprint. It included setting up a MongoDB backend to manage inventory efficiently and integrating OpenAI's API with Python to create meal kits using food close to expiry. On the frontend, a user-friendly interface was designed with React, making it easy for nonprofits to arrange same-day pickups. The project's goals and impact were presented at the final conference, highlighting expertise in backend development, frontend design, and API integration.",
    images: [fresh, grfn, inject],
    ghlink: "https://github.com/SaulWolkove/QHACKS24",
    background: fresh,
  },
  {
    id: 2,
    title: "Good Reads For Nerds",
    about:
      "This project involved developing a dynamic web application with a React frontend and Spring Boot backend, integrated with MongoDB. Features were implemented to allow users to comment on and annotate individual book chapters, enhancing reading comprehension and providing a platform for sharing thoughts. The project is currently being expanded to include user accounts, authentication, and comprehensive unit testing. Future enhancements are planned to create user-driven 'book clubs' for collaborative discussions and idea sharing, imitating common social media functions.",
    images: [grfn],
    ghlink: "https://github.com/rena-hajjar/GoodReadsForNerds",
    background: grfn,
  },
  {
    id: 3,
    title: "Med-i Injection Simulator",
    about:
      "This project improved healthcare training methods by developing a metric-based evaluation system for lifelike clinical simulations. Optical tracking and open-source software were used to create a visual guidance tool for injections, offering real-time feedback. An OptiTrack camera and 3D-printed sensors on the needle allowed metrics to be transferred via Plus to 3D Slicer, visualizing movement on a phantom model. This enabled students to visualize the needle's movement using Slicer transforms and analyze the angle and depth of their injection practice, enhancing their accuracy and technique.",
    images: [inject],
    ghlink: "https://github.com/rena-hajjar",
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
  const [currentProject, setCurrentProject] = useState(1);

  function handleClose() {
    setIsDialogOpen(false);
  }

  function handleClick(projectId: number) {
    setIsDialogOpen(true);
    setCurrentProject(projectId);
    console.log(currentProject);
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
                    onClick={() => handleClick(project.id)}
                    variant="contained"
                  >
                    See More
                  </Button>
                </motion.div>
              </div>
            </>
          ))}
        </div>

        <Dialog open={isDialogOpen} onClose={handleClose}>
          <DialogTitle className="project-title">
            {projects.find((project) => project.id === currentProject)?.title}
            <a
              href={
                projects.find((project) => project.id === currentProject)
                  ?.ghlink
              }
              target="_blank"
            >
              <div style={{ width: "48px", height: "48px" }}>
                <Github></Github>
              </div>
            </a>
          </DialogTitle>
          <DialogContent
            style={{ background: "linear-gradient(#D8ECDB 0%, #E5EDE7 50%)" }}
          >
            <div className="dialog">
              {/* <Carousel>
                <div className="carousel-slide" data-ride="carousel">
                  {projects
                    .find((project) => project.id === currentProject)
                    ?.images.map((image) => (
                      <div className="carousel-item">
                        <Image src={image} alt="Project image"></Image>
                      </div>
                    ))}

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Carousel> */}
              <div className="project-images">
                <Image
                  src={
                    projects.find((project) => project.id === currentProject)
                      ?.images[0] || fresh
                  }
                  alt="Project gallery"
                  style={{ width: "40vh", height: "40vh" }}
                ></Image>
              </div>
              <div className="project-summary">
                {
                  projects.find((project) => project.id === currentProject)
                    ?.about
                }
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
