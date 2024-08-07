import { List } from "postcss/lib/list";
import "./ExperienceCard.css";
import Image from "next/image";
import readwise from './../data/readwise.png';

export default function ExperienceCard({
  title,
  stack,
}: {
  title: string;
  stack: string;
}) {
  return (
    <>
      <div className="experience">
        <div className="exp-card-container">
          <div className="exp-card-blurbs">
            <div className="exp-card-title">{title}</div>
          </div>

          <div className="tech">
            <div className="tech-stack-container">
              <div className="tech-stack-title">Tech Stack</div>
              <div className="techstack">{stack}</div>
            </div>
            <div className="company">
              <Image
                style={{ height: 120, width: 120, margin:"2vw" }}
                src={readwise}
                alt="readwise logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
