import './Main.css'
import HeroTimeline from './HeroTimeline';
import Projects from './Projects';
import ResumeButton from '@/app/components/ResumeButton';
import Experience from './Experience';
import Contact from './Contact';

export default function Main() {

    return (
      <>
        <div className="main-container">
          <div className="intro-text-container">
            <div className="intro-text">
              Hello, I'm
              <div className="name-text">Réna Hajjar</div>
            </div>
            <div className="about-text">
              I'm a third-year Computing student at Queen’s University and a
              Fullstack Software Engineer
            </div>
          </div>
          <div className="computer-container"/>
          <div className="resume-button-container">
            <ResumeButton />
          </div>
        </div>
        <HeroTimeline/>
        <Projects />
        <Experience />
        <Contact />
      </>
    );
}