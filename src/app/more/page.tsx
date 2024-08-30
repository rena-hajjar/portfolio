"use client";

import NavBar from "@/app/components/NavBar";
import "./more.css";
import { motion } from "framer-motion";
import { Dialog, DialogContent, ImageList, ImageListItem, Slide } from "@mui/material";
import { useState } from "react";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import ArrowLeft from "../data/svgs/arrowLeft";
import ArrowRight from "../data/svgs/arrowRight";
import SBT from './../data/extracs/perk-demo.jpeg';
import Image from "next/image";

const imageList = [
  {
    id: 1,
    title: "Art",
    img: SBT,
    width: 300,
  },
  {
    id: 2,
    title: "Music",
    img: SBT,
    width: 250,
  },
  {
    id: 3,
    title: "Coursework",
    img: SBT,
    width: 500
  },
];

export default function More() {
  const [isArtOpen, setIsArtOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  const handleArtClick = () => {
    if (isArtOpen) {
      setIsArtOpen(false);
    } else {
      setIsArtOpen(true);
    }
  };

  const handleCourseClick = () => {
    if (isCourseOpen) {
      setIsCourseOpen(false);
    } else {
      setIsCourseOpen(true);
    }
  }

  const handleMusicClick = () => {
    if (isMusicOpen) {
      setIsMusicOpen(false);
    } else {
      setIsMusicOpen(true);
    }
  };

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
              <button
                onClick={handleArtClick}
                style={{ background: "transparent", border: "none" }}
              >
                <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                  Art
                </motion.div>
              </button>
              <button
                onClick={handleMusicClick}
                style={{ background: "transparent", border: "none" }}
              >
                <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                  Music
                </motion.div>
              </button>
            </div>
            <div className="more-about">
              My art and music have always been integral parts of my person. Not
              only are they ways of creating to express emotion, but they are
              points of relaxation in a world that doesn’t stop. The calm they
              provide has been much more noticable to me since joining a world
              of technology.
            </div>
            <button
              onClick={handleCourseClick}
              style={{ background: "transparent", border: "none" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                Coursework
              </motion.div>
            </button>
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

        <Dialog open={isArtOpen} onClose={handleArtClick} maxWidth={"xl"}>
          <DialogContent className="modal">
            <div className="modal-header">
              <ArrowRight />
              <div className="modal-title">My Art.</div>
              <ArrowLeft />
            </div>
            <div className="art-modal-body">
              <div className="gallery">
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  variant="masonry"
                  cols={3}
                  gap={8}
                >
                  {imageList.map((image) => (
                    <ImageListItem key={image.id}>
                      <Image
                      width={image.width}
                        src={image.img}
                        alt={image.title}
                      ></Image>
                      {/* <img
                        srcSet={`${image.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image.img}?w=161&fit=crop&auto=format`}
                        alt={image.title}
                        loading="lazy"
                      /> */}
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isMusicOpen} onClose={handleMusicClick} maxWidth={"xl"}>
          <DialogContent className="modal">
            <div className="modal-header">
              <ArrowRight />
              <div className="modal-title">My Music.</div>
              <ArrowLeft />
            </div>
          </DialogContent>
        </Dialog>

        <Dialog
          open={isCourseOpen}
          onClose={handleCourseClick}
          scroll="paper"
          maxWidth={"xl"}
        >
          <DialogContent className="course-modal">
            <div className="modal-sidebar">
              <div className="sidebar-title">Scroll to:</div>
              <div className="sidebar-text">
                <div>Linear Data Analysis</div>
                <div>Computer Architecture</div>
                <div>Data Structures</div>
                <div>Analytical Genomics</div>
              </div>
            </div>
            <div className="rest-of-modal">
              <div className="coursework-header">
                <ArrowRight />
                <div className="modal-title">Coursework</div>
                <ArrowLeft />
              </div>
              <div className="coursework-body">
                <div className="test-text">Hello!</div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
