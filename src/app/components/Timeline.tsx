import React from "react"
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css"
import Image from "next/image";
import ontario from './../data/ontario.jpeg';
import readwise from './../data/readwise.png';
import queens from './../data/crest.png';
import perk from './../data/perk.png';

export default function Timeline() {

    return (
      <>
        <div>
          <VerticalTimeline
            animate={true}
            layout="1-column-right"
            className="main-timeline"
            lineColor="white"
          >
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              date="May 2024"
            >
              <div className="vertical-timeline-element-title">
                Backend Developer Intern - Ontario Public Service, MPBSDP
              </div>
              <div className="timeline-element-about">
                - Building API endpoints in a Spring Boot application and
                testing with Postman for user email alerts on database changes -
                Interacted with above API in an Angular framework to optimize
                user experience and modernize 20 year old website - Created 10
                automations for reservation booking with Microsoft Power
                Automate - Modernized data flow for clients with Azure Data
                Factory pipelines - Excel product management skills through
                Project Management Institue meetings - Work first hand in an
                Agile development environment for efficient client satisfaction
              </div>
              <Image
                className="timeline-image"
                src={ontario}
                alt="ontario logo"
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              date="October 2023"
            >
              <div className="vertical-timeline-element-title">
                Undergraduate ML Research Student - Queen's Lab for Percutaneous
                Surgery
              </div>
              <div className="timeline-element-about">
                - Automate data transfer to match requirements for 3D Slicer
                modules - Annotate and prepare surgical video data for
                Tensorflow training - Become familiarized with biomedical
                research process and feed my curiosity
              </div>
              <Image className="timeline-image" src={perk} alt="perk" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              date="May 2023"
            >
              <div className="vertical-timeline-element-title">
                Software Engineer Intern - Readwise
              </div>
              <div className="timeline-element-about">
                - Worked with React in a beautiful small startup environment -
                Learned git version control, Docker and React best principles
              </div>
              <Image
                className="timeline-image"
                src={readwise}
                alt="readwise logo"
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              date="September 2022"
            >
              <div className="vertical-timeline-element-title">
                Bachelor of Computing with Honours - Queen's University
              </div>
              <div className="timeline-element-about">
                Want to see more? button to go to coursework page
              </div>
              <Image
                className="timeline-image"
                src={queens}
                alt="queen's university crest"
              ></Image>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </>
    );
}