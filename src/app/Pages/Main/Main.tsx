import './Main.css'
import HeroTimeline from './HeroTimeline';
import computer from '@/app/data/c.png'
import ResumeButton from '@/app/components/ResumeButton';

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
              Fullstack SWE
            </div>
          </div>
          <div className="computer-container"/>
          <div className="resume-button-container">
            <ResumeButton />
          </div>
        </div>
        <HeroTimeline/>
      </>
    );
}