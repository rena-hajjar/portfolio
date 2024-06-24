import './HeroTimeline.css'
import Timeline from '@/app/components/Timeline';
import Wave from '@/app/components/Wave';
import { motion } from 'framer-motion';

export default function HeroTimeline() {

    return (
      <>
        <div className="main">
          <div className="hero-container">
            <div className="hero-blurb">
              <div className="hero-welcome">
                  <motion.div animate={{ rotate: [0, -25, 65, 0]}}>
                    <Wave></Wave>
                  </motion.div>
                <div className="welcome-title">Welcome!</div>
              </div>
              This website as close as we can connect by static media. I’ll try
              my best to give you a full impression of who I am.
            </div>
            <div className="hero-image"></div>
          </div>
          <div className="timeline-container">
            <Timeline></Timeline>
          </div>
        </div>
      </>
    );
}