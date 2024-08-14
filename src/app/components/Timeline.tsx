import React from "react"
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css"
import Image from "next/image";
import ontario from './../data/ontario.jpeg';
import readwise from './../data/readwise-color.png';
import queens from './../data/queens-color.png';
import perk from './../data/perk.png';

export default function Timeline() {

    return (
      <>
        <div className="timeline-container">
          <div className="timeline-background">
            <VerticalTimeline
              layout="1-column-right"
              className="main-timeline"
              lineColor="white"
            >
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date="May 2024"
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={ontario}
                      alt={"Ontario Logo"}
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
                  Backend Developer Intern - MPBSDP
                </div>
                <div className="timeline-element-about">
                  <ul>
                    <li>
                      Building API endpoints in a Spring Boot application and
                      testing with Postman for user email alerts on database
                      changes
                    </li>
                    <li>
                      Interacted with above API in an Angular framework to
                      optimize user experience and modernize 20 year old website
                    </li>
                    <li>
                      Created 10 automations for reservation booking with
                      Microsoft Power Automate
                    </li>
                    <li>
                      Modernized data flow for clients with Azure Data Factory
                      pipelines
                    </li>
                    <li>
                      Excel product management skills through Project Management
                      Institue meetings
                    </li>
                    <li>
                      Work first hand in an Agile development environment for
                      efficient client satisfaction
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date="October 2023"
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={perk}
                      alt={"Perk lab Logo"}
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
                  Undergraduate ML Research Student - Queen's Perk Lab
                </div>
                <div className="timeline-element-about">
                  <ul>
                    <li>
                      Automate data transfer to match requirements for 3D Slicer
                      modules
                    </li>
                    <li>
                      Annotate and prepare surgical video data for Tensorflow
                      training
                    </li>
                    <li>
                      Become familiarized with biomedical research process and
                      feed my curiosity
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date="May 2023"
                icon={
                  <Image
                      src={readwise}
                      alt={"Readwise Logo"}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        borderRadius: "15px",
                      }}
                  />
                }
              >
                <div className="vertical-timeline-element-title">
                  Software Engineer Intern - Readwise
                </div>
                <div className="timeline-element-about">
                  <ul>
                    <li>
                      Worked with React in a beautiful small startup environment
                    </li>
                    <li>
                      Learned git version control, Docker and React best
                      principles
                    </li>
                  </ul>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                date="September 2022 - April 2026"
                icon={
                  <Image
                      src={queens}
                      alt={"Queen's University Logo"}
                      style={{
                        width: 42,
                        height: 42,
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                  />
                }
              >
                <div className="vertical-timeline-element-title">
                  Bachelor of Computing with Honours - Queen's University
                </div>
                <div className="timeline-element-about">
                  <ul>
                    <li>Want to see more? button to go to coursework page</li>
                  </ul>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </>
    );
}