import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import Image from "next/image";
import ontario from "./../data/ontario.jpeg";
import readwise from "./../data/readwise-color.png";
import queens from "./../data/queens-color.png";
import perk from "./../data/perk.png";

const timeline = [
  {
    id: 1,
    title: "Backend Software & Data Engineer Intern - OPS",
    points: [
      "Building API endpoints in a Spring Boot application and testing with Postman for user email alerts on database changes",
      "Interacted with above API in an Angular framework to optimize user experience and modernize 20 year old website",
      "Created 10 automations for reservation booking with Microsoft Power Automate",
      "Modernized data flow for clients with Azure Data Factory pipelines",
      "Excel product management skills through Project Management Institue meetings",
      "Work first hand in an Agile development environment for efficient client satisfaction",
    ],
    logo: ontario,
    alt: "Ontario Logo",
    date: "May 2024 - September 2024"
  },
  {
    id: 2,
    title: "Undergraduate ML Research Student - Queen's Perk Lab",
    points: [
      "Automate data transfer to match requirements for 3D Slicer modules",
      "Annotate and prepare surgical video data for Tensorflow training",
      "Become familiarized with biomedical research process and feed my curiosity"
    ],
    logo: perk,
    alt: "Percutaneous Surgery Lab Logo",
    date: "October 2023 - Present"
  },
  {
    id: 3,
    title: "Software Engineer Intern - Readwise",
    points: [
      "Worked with React in a beautiful small startup environment",
      "Learned git version control, Docker and React best principles"
    ],
    logo: readwise,
    alt: "Readwise Logo",
    date: "May 2023 - September 2023"
  },
  {
    id: 4,
    title: "Bachelor of Computing with Honours - Queen's University",
    points: [],
    logo: queens,
    alt: "Queen's University Crest",
    date: "September 2022 - April 2026"
  }
];

export default function Timeline() {
  return (
    <>
      <div className="timeline-container">
        <div className="timeline-background">
          <VerticalTimeline
            layout="1-column-right"
            className="main-timeline"
            animate
          >
            {timeline.map((card) => (
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date={card.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={card.logo}
                      alt={card.alt}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                }
              >
                <div className="vertical-timeline-element-title">
                  {card.title}
                </div>
                <div className="timeline-element-about">
                  <ul>
                    {card.points.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}
