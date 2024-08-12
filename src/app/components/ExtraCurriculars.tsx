import Image, { StaticImageData } from "next/image";
import perk from './../data/perk-demo.jpeg';
import React from "react";
import './ExtraCurriculars.css';
import { motion } from "framer-motion";

const ExtraCs = [
    {
        id: 1,
        title: "Smith Business and Tech",
        role: "Logistics Director",
        image: perk,
    },
    {
        id: 2,
        title: "Queen's Women in Tech",
        role: "HackHer Coordinator",
        image: perk,
    },
    {
        id: 3,
        title: "Queen's Climbing Club",
        role: "General Climber",
        image: perk,
    },
    {
        id: 4,
        title: "The Perk Lab",
        role: "Undergraduate Researcher & Volunteer",
        image: perk,
    },
    {
        id: 5,
        title: "Queen's Music Club",
        role: "General Member",
        image: perk,
    },
]


function ExtraCurricularCard({title, role, image} : Readonly<{title: string; role: string; image: StaticImageData}>) {
    //should i open a dialog? what are other ways i could display this info
    return (
        <>
        <motion.div className="ec-card-container" whileHover={{ scale: 1.25 }}>
            <div className="ec-card">
                <Image 
                src={image} 
                alt="club/extracurricular image"
                className="ec-image"></Image>
                <div className="ec-info">
                    <div className="ec-title">{title}</div>
                    <div className="ec-role">{role}</div>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default function ExtraCurriculars() {
    return (
        <>
            <div className="ec-container">
                <div className="ec-section-title">Clubs and Volunteering.</div>
                <div className="ec">
                    {ExtraCs.map((ec) => (
                        <ExtraCurricularCard 
                        key={ec.id}
                        title={ec.title}
                        role={ec.role}
                        image={ec.image}/>
                    ))}
                </div>
            </div>
        </>
    )
}