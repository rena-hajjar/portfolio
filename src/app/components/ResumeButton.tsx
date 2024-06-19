import './ResumeButton.css'
import Download from './Download';

export default function ResumeButton() {
    //todo: acc download on click

    return (
      <>
        <div className="resume-button">
          <div className="resume-text">Resume</div>
          <Download/>
        </div>
      </>
    );
}