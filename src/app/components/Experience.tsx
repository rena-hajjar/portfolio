import './Experience.css';
import ExperienceCard from '@/app/components/ExperienceCard';
import readwise from './../data/readwise.png';
import Image from 'next/image';

export default function Experience() {
    return (
        <>
        <div className="exp-container">
            <div className="exp-title">Work Experience</div>
            <ExperienceCard title="Readwise SWE" stack='React, Python, Docker, ExpressJS, HTML, CSS, Typescript' image="/../data/readwise.png"/>
            <ExperienceCard title="Backend Engineer with OPS" stack="Springboot, Postman, Angular, Azure Data Factory, Azure DevOps" image="/../data/ontario.jpeg"/>       
        </div>
        </>
    )
}