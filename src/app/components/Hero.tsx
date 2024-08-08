import "./Hero.css";
import Wave from "@/app/components/Wave";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </head>

      <div className="main-hero">
        <div className="hero-container">
          <div className="hero-blurb">
            <div className="hero-welcome">
              <div className="hero-wave">
                <motion.div whileInView={{ rotate: [0, -25, 65, 0] }}>
                  <Wave></Wave>
                </motion.div>
              </div>
              <div className="welcome-title">Welcome!</div>
            </div>
            This website as close as we can connect by static media. I’ll try my
            best to give you a full impression of who I am.
          </div>
          <div className="hero-image"></div>
        </div>
      </div>
    </>
  );
}
