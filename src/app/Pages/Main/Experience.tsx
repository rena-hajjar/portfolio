import './Experience.css';
import ExperienceCard from '@/app/components/ExperienceCard';

export default function Experience() {
    return (
        <>
        <div className="exp-container">
            <div className="exp-title">Work Experience</div>
            <ExperienceCard title="Readwise SWE" />
            <ExperienceCard title="Backend Engineer with OPS" />            
        </div>
        </>
    )
}