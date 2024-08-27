import NavBar from "@/app/components/NavBar";
import './more.css';
import { motion } from "framer-motion";

export default function More() {
    return (
      <>
        <NavBar color="#6570E6"></NavBar>
        <div className="more-main">
          <div className="more-title">More About Me.</div>
          <div className="more-cards-container">
            <motion.div whileHover={{ scale:1.1 }}className="more-card">Art</motion.div>
            <div className="more-card">Music</div>
            <div className="more-card">Rock Climbing</div>
            <div className="more-card">Coursework</div>
          </div>
        </div>
      </>
    );
}