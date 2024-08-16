import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Image from "next/image";
import inject from "./../data/injecto.png";
import fresh from "./../data/freshsave.png";
import grfn from "./../data/grfn.jpeg";
import Github from "../data/svgs/github";
import { Carousel } from "react-bootstrap";
// import arduino from "./../data/arduino.png";
import { Button, createTheme, Dialog, DialogTitle, DialogContent } from "@mui/material";
import Modal from "react-bootstrap/esm/Modal";

const projects = [
  {
    id: 1,
    title: "Fresh Save",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: [fresh, grfn, inject],
    ghlink: "https://github.com/SaulWolkove/QHACKS24",
    background: fresh,
  },
  {
    id: 2,
    title: "Good Reads For Nerds",
    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    images: [grfn],
    ghlink: "https://github.com/rena-hajjar/GoodReadsForNerds",
    background: grfn,
  },
  {
    id: 3,
    title: "Med-i Injection Simulator",
    about: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
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
          <DialogContent style={{ background: "#D8ECDB" }}>
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
              <Image
                src={
                  projects.find((project) => project.id === currentProject)
                    ?.images[0] || fresh
                }
                alt="Project gallery"
                style={{ width: "26vw", height: "26vw" }}
              ></Image>
              {projects.find((project) => project.id === currentProject)?.about}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
