"use client";

import NavBar from "@/app/components/NavBar";
import './more.css';
import { motion } from "framer-motion";

export default function More() {
    return (
      <>
        <NavBar color="#6570E6"></NavBar>
        <div className="more-main">
          <div className="more-title">More About Me.</div>
          <div className="more-explained">
            Pope Francis (Latin: Franciscus; Italian: Francesco; Spanish: Francisco;
            born Jorge Mario Bergoglio;[b] 17 December 1936) is head of
            the Catholic Church and sovereign of the Vatican City State. He is
            the first pope to be a member of the Society of Jesus (Jesuits), the
            first from the Americas and the Southern Hemisphere, and the first
            born or raised outside Europe since the 8th-century papacy of
            the Syrian Pope Gregory III.
          </div>
          <div className="more-cards-container">
            <motion.div whileHover={{ scale: 1.05 }} className="more-card">
              Art
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="more-card">
              Music
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="more-card">
              Rock Climbing
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="more-card">
              Coursework
            </motion.div>
          </div>
        </div>
      </>
    );
}