"use client";

import NavBar from "@/app/components/NavBar";
import "./more.css";
import { motion } from "framer-motion";
import { useDisclosure, ModalContent } from "@nextui-org/modal";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const mores = [
  {
    id: 1,
    title: "Art",
  },
  {
    id: 2,
    title: "Music",
  },
  {
    id: 3,
    title: "Coursework",
  },
];

function ArtModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open blarg</button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{ zIndex: 1000, backgroundColor: "white" }}
      >
        <ModalContent className="modal-content">
          {(onClose) => (
            <>
              <ModalHeader>My Modal 123</ModalHeader>
              <ModalBody>
                <p>Here is my modal.</p>
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose}>Close</button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default function More() {
  return (
    <>
      <NavBar color="#6570E6"></NavBar>
      <div className="more-main">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="more-title">More About Me.</div>
          <div className="more-explained">
            I like to believe my personal strengths lie in more areas than just
            development. I am, after all, not a machine. My technical skills do
            not fall short of others, but I like to learn from all areas. Here,
            you’ll find some of the things that I love, and what I spend time on
            outside of work and side projects. If you’ve come this far, you may
            really get a holistic image of who I am. I learn from developing
            code, and from creating in these fields. I hope to be constantly
            improving by applying lessons in my day to day actions from every
            field I spend time in.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut" }}
        >
          <div className="more-cards-container">
            <div className="artmus">
              <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                Art
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                Music
              </motion.div>
            </div>
            <div className="more-about">
              My art and music have always been integral parts of my person. Not
              only are they ways of creating to express emotion, but they are
              points of relaxation in a world that doesn’t stop. The calm they
              provide has been much more noticable to me since joining a world
              of technology.
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="more-card">
              Coursework
            </motion.div>
            <div className="more-about">
              My education is one of the most important things in my life. My
              grandma used to tell my mom, who now tells me, that no one can
              ever take away your education. I’ve always found joy in learning
              things outside of school, but the chance to learn in a structured
              fashion from experts in fields I care for is not something I take
              for granted.
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
