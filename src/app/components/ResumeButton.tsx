import './ResumeButton.css'
import Download from './Download';
import { motion } from 'framer-motion'

export default function ResumeButton() {
    const handleClick = () => {
      window.open('/RSH-CV2024_Unedited.pdf', '_blank');
    };

    return (
      <>
        <div className="resume-button">
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
          >
            <div className="resume-text">Resume</div>
            <Download color='white'/>
          </motion.button>
        </div>
      </>
    );
}