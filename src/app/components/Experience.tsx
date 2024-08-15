import './Experience.css';
import ExperienceCard from '@/app/components/ExperienceCard';
import readwise from './../data/readwise.png';
import ontario from './../data/ontario.jpeg';

export default function Experience() {
    const readwiselessons = [
      {
        id: 1,
        title: "I don't know everything!",
        about:
          "Or more rather, that it’s okay that I don’t know everything. As a perfectionist, I struggled with feeling like I was always behind, or that I had made a mistake trying to compete in such a complex field of work. In reality, everyone in the company had at least 10 years of experience over me and I couldn’t have expected to be at a level playing field. I had to learn to view more knowledgeable people as an asset to learn, rather than as my competition.",
      },
      {
        id: 2,
        title: "Breaking out of my academic mindset was crucial",
        about: "to growing properly in this role. The end goal was not a finite test; Instead, I had to learn that there is always going to be a “better” solution to a problem, with new technologies coming out every day. It’s crucial to get people’s input, and to not let the indecisiveness of finding the ‘best’ decision get in the way, but to focus on the most optimal one and grow as you go."
      },
    ];
    const readwiseabout =
      "As my first internship, this role had a steep learning curve. In a group of incredibly patient seniors in this startup environment, I learned the basics of React Hooks, Git version control, and the continuous software development cycle. By the end of my 4 months here, I was able to co-author the new Notebook feature, which used a combination of data migration with Python in the backend to connect readers’ books to the new feature, and the frontend child and parent component design in React. I look back on my time here with a full heart - it was such a happy experience, and I don’t think I could have started off my learning with a better group of people.";
    
      return (
        <>
        <div className="exp-container">
            <div className="exp-title">Work Experience.</div>
            <ExperienceCard 
            title="Readwise SWE" 
            techstack={['React', 'Python', 'Docker', 'ExpressJS', 'HTML', 'CSS', 'Typescript', 'Linear']} 
            image={readwise}
            about={readwiseabout}
            lessons={readwiselessons}/>
            <ExperienceCard title="Backend Engineer with OPS" techstack={['Spring Boot', 'Angular', 'Java', 'Javascript', 'Postman', 'Azure Data Factory', 'Databricks']} image={ontario}
            about={readwiseabout}
            lessons={readwiselessons}/>       
        </div>
        </>
    )
}