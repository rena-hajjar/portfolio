import './HeroTimeline.css'
import Wave from '@/app/components/Wave';

export default function HeroTimeline() {

    return (
      <>
        <div className="main">
          <div className="hero-container">
            <div className="hero-blurb">
              <div className="hero-welcome">
                <div className="wave">
                  <Wave></Wave>
                </div>
                <div className="welcome-title">Welcome!</div>
              </div>
              This website as close as we can connect by static media. I’ll try
              my best to give you a full impression of who I am.
            </div>
            <div className="hero-image"></div>
          </div>
          <div className="timeline-container"></div>
        </div>
      </>
    );
}