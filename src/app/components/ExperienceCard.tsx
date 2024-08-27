import "./ExperienceCard.css";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { List } from "postcss/lib/list";

export default function ExperienceCard({
  title,
  techstack,
  image,
  about,
  lessons,
}: {
  title: string;
  techstack: Array<String>;
  image: StaticImageData;
  about: string;
  lessons: { id: number; title: string; about: string }[];
}) {
  return (
    <>
      <motion.div
        className="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="exp-card-container">
          <div className="exp-card-blurb">
            <div className="exp-card-intro">
              <p className="exp-card-title">{title}</p>
              <div className="exp-card-about">{about}</div>
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

          <div className="lessons-title">Lessons Learned</div>
          <div className="exp-card-lessons">
            <ol>
              {lessons.map((lesson) => (
                <li>
                  <b>{lesson.title} </b>
                  {lesson.about}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </>
  );
}
