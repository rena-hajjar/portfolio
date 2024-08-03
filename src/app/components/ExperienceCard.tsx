import './ExperienceCard.css';

export default function ExperienceCard({ title }: { title: string}) {
    return (
        <>
            <div className="exp-card-container">
                <div className="exp-card-title">{title}</div>
            </div>
        </>
    )
}