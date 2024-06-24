import React from "react"
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css"

export default function Timeline() {

    return (
      <>
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
              Backend Developer Intern
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="October 2023"
          >
            <div className="vertical-timeline-element-title">
              Undergraduate ML Research Student
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="May 2023"
          >
            <div className="vertical-timeline-element-title">
              Software Engineer Intern
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="September 2022"
          >
            <div className="vertical-timeline-element-title">
              Bachelor of Computing with Honours
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </>
    );
}