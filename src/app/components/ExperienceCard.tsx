import { List } from "postcss/lib/list";
import "./ExperienceCard.css";
import Image from "next/image";
import readwise from './../data/readwise.png';

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
                className="tech-image"
                src={image}
                width={50}
                alt="company logo"
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
