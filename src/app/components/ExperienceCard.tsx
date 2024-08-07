import { List } from 'postcss/lib/list';
import './ExperienceCard.css';

export default function ExperienceCard({ title, stack }: { title: string; stack: string}) {
    return (
      <>
        <div className="experience">
          <div className="exp-card-container">
            <div className="exp-card-title">{title}</div>

            <div className="tech-stack-container">
              <div className="tech-stack-title">Tech Stack</div>
              <div className="techstack">{stack}</div>
            </div>
            <div className="company"></div>
          </div>
        </div>
      </>
    );
}