import './Experience.css';
import ExperienceCard from '@/app/components/ExperienceCard';

export default function Experience() {
    return (
        <>
        <div className="exp-container">
            <div className="exp-title">Experience</div>
            <ExperienceCard title="Readwise SWE" />
        </div>
        </>
    )
}