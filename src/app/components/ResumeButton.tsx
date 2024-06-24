import './ResumeButton.css'
import Download from './Download';
import { motion } from 'framer-motion';

export default function ResumeButton() {
    //todo: acc download on click

    return (
      <>
        <div className="resume-button">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="RénaHajjar_CV_2024.pdf"
            target="_blank">
            <div className="resume-text">Resume</div>
            <Download />
          </motion.a>
        </div>
      </>
    );
}