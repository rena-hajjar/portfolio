import './ResumeButton.css'
import Download from './Download';
import { motion } from 'framer-motion';

export default function ResumeButton() {
    //todo: acc download on click

    return (
      <>
        <div className="resume-button">
          <motion.a
            href={"./../data/resume.pdf"}
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.1 }}
          >
            <div className="resume-text">Resume</div>
            <Download />
          </motion.a>
        </div>
      </>
    );
}