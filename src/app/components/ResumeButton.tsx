import './ResumeButton.css'
import Download from './Download';
import { motion } from 'framer-motion'
import pdf from './../../files/resume.pdf';

export default function ResumeButton() {
    const handleClick = () => {
      window.open('/resume.pdf', '_blank');
    };

    return (
      <>
        <div className="resume-button">
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
          >
            <div className="resume-text">Resume</div>
            <Download />
          </motion.button>
        </div>
      </>
    );
}