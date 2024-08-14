import './Experience.css';
import ExperienceCard from '@/app/components/ExperienceCard';
import readwise from './../data/readwise.png';
import ontario from './../data/ontario.jpeg';

export default function Experience() {
    return (
        <>
        <div className="exp-container">
            <div className="exp-title">Work Experience.</div>
            <ExperienceCard title="Readwise SWE" techstack={['React', 'Python', 'Docker', 'ExpressJS', 'HTML', 'CSS', 'Typescript']} image={readwise}/>
            <ExperienceCard title="Backend Engineer with OPS" techstack={['Spring Boot', 'Angular', 'Java', 'Javascript', 'Postman', 'Azure Data Factory', 'Databricks']} image={ontario}/>       
        </div>
        </>
    )
}