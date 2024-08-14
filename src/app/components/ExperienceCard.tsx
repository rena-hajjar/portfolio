import "./ExperienceCard.css";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { List } from "postcss/lib/list";

export default function ExperienceCard({
  title,
  techstack,
  image,
}: {
  title: string;
  techstack: Array<String>;
  image: StaticImageData;
}) {
  return (
    <>
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
              <div className="techstack">
                <ul>
                  {techstack.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="company">
              <Image
                className="tech-image"
                src={image}
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
