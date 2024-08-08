import { List } from "postcss/lib/list";
import "./ExperienceCard.css";
import Image from "next/image";
import readwise from './../data/readwise.png';
import { motion } from "framer-motion";
import { duration } from "@mui/material";

export default function ExperienceCard({
  title,
  stack,
  image,
}: {
  title: string;
  stack: string;
  image: string
}) {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </head>
      <motion.div
        className="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="exp-card-container">
          <div className="exp-card-blurbs">
            <div className="exp-card-title">{title}</div>
            <div className="exp-card-about">This role consisted of...</div>
            <div className="exp-card-title">Lessons Learned</div>
            <div className="exp-card-about">Lesson 1:</div>
          </div>

          <div className="tech">
            <div className="tech-stack-container">
              <div className="tech-stack-title">Tech Stack</div>
              <div className="techstack">{stack}</div>
            </div>
            <div className="company">
              <Image
                className="tech-image"
                src={readwise}
                width={50}
                alt="company logo"
                height={50}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
