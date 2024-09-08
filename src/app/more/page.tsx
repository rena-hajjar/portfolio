"use client";

import NavBar from "@/app/components/NavBar";
import "./more.css";
import { motion } from "framer-motion";
import { Dialog, DialogContent, ImageList, ImageListItem, Slide } from "@mui/material";
import { useState } from "react";
import React from "react";
import ArrowLeft from "../data/svgs/arrowLeft";
import ArrowRight from "../data/svgs/arrowRight";
import agua from './../data/art_items/agua/agua.png';
import chris from './../data/art_items/christie_drums/chris.png';
import jim from './../data/art_items/jimmy/jim.png';
import orange from './../data/art_items/orange/orange.jpg';
import birds from './../data/art_items/birds.jpg';
import finger from './../data/art_items/finger_painting.jpg';
import ballet from './../data/art_items/ballet.jpg';
import flowerhead from './../data/art_items/flower_head.png';
import frank from './../data/art_items/frankenstein.png';
import oldbirds from './../data/art_items/old_bird.jpg';
import artclass from './../data/art_items/art_class.jpg';

import Image from "next/image";

const imageList = [
  {
    id: 8,
    title: "Frank",
    img: frank,
  },
  {
    id: 9,
    title: "Flower Head",
    img: flowerhead,
  },
  {
    id: 1,
    title: "Water Swim",
    img: agua,
  },
  {
    id: 2,
    title: "Christie Drums",
    img: chris,
  },
  {
    id: 3,
    title: "JimmyH",
    img: jim,
  },
  {
    id: 4,
    title: "Art Class Perspective Paintint",
    img: artclass,
  },
  {
    id: 5,
    title: "Orange",
    img: orange,
  },
  {
    id: 6,
    title: "birds",
    img: birds,
  },
  {
    id: 7,
    title: "finger",
    img: finger,
  },
  {
    id: 10,
    title: "Ballet",
    img: ballet,
  },
  {
    id: 11,
    title: "Old Birds",
    img: oldbirds,
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
              {/* <ArrowRight /> */}
              <div className="modal-title">My Art.</div>
              {/* <ArrowLeft /> */}
            </div>
            <div className="art-modal-body">
              <div className="gallery">
                <ImageList
                  sx={{
                    width: "inherit",
                    columnCount: {
                      xs: "2 !important",
                      sm: "2 !important",
                      md: "3 !important",
                      lg: "3 !important",
                      xl: "4 !important",
                    },
                  }}
                  variant="masonry"
                  gap={8}
                >
                  {imageList.map((image) => (
                    <ImageListItem key={image.id}>
                      <Image
                        src={image.img}
                        sizes="28vw"
                        alt={image.title}
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                      ></Image>
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
                <div>Computer-Integrated Surgery</div>
                <div>Programming Paradigms</div>
                <div>Philosophy of Physics</div>
              </div>
            </div>
            <div className="rest-of-modal">
              <div className="coursework-header">
                <ArrowRight />
                <div className="modal-title">Coursework</div>
                <ArrowLeft />
              </div>
              <div className="coursework-body">
                <div className="test-text"></div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
