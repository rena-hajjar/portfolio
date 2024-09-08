"use client";

import NavBar from "@/app/components/NavBar";
import "./more.css";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  ImageList,
  ImageListItem,
  Slide,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import music from './../data/music_Cover.png';
import ArtModal from "../components/More/ArtModal";
import CourseModal from "../components/More/CourseModal";
import MusicModal from "../components/More/MusicModal";

import Image from "next/image";
import flowerhead from "./../data/art_items/flower_head.png";

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
  };

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
                  <div className="more-thumbnail">
                    <Image
                      src={flowerhead}
                      alt="Painting"
                      width={400}
                      height={400}
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    ></Image>
                  </div>
                  <div className="caption">My Art</div>
                </motion.div>
              </button>
              <button
                onClick={handleMusicClick}
                style={{ background: "transparent", border: "none" }}
              >
                <motion.div whileHover={{ scale: 1.05 }} className="more-card">
                  <div className="more-thumbnail">
                    <Image
                      src={music}
                      alt="Girl playing guitar"
                      width={400}
                      height={400}
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    ></Image>
                  </div>
                  <div className="caption">Music</div>
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
            <ArtModal></ArtModal>
          </DialogContent>
        </Dialog>

        <Dialog
          open={isMusicOpen}
          onClose={handleMusicClick}
          maxWidth={"xl"}
          scroll="paper"
        >
          <DialogContent className="modal">
            <MusicModal></MusicModal>
          </DialogContent>
        </Dialog>

        <Dialog
          open={isCourseOpen}
          onClose={handleCourseClick}
          scroll="paper"
          maxWidth={"xl"}
        >
          <DialogContent className="course-modal">
            <CourseModal></CourseModal>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
