// ─────────────────────────────────────────────────────────────
// All the words on the site live here. Edit this file to update
// content — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export type SectionId =
  | "about"
  | "research"
  | "work"
  | "music"
  | "art"
  | "travel"
  | "writing";

export const sections: {
  id: SectionId;
  label: string;
  href: string;
  color: string;
}[] = [
  { id: "about", label: "About", href: "/#about", color: "#7840E5" },
  { id: "research", label: "Research", href: "/#research", color: "#3B7FD9" },
  { id: "work", label: "Work", href: "/#work", color: "#6570E6" },
  { id: "music", label: "Music", href: "/music/", color: "#F29A3A" },
  { id: "art", label: "Art", href: "/art/", color: "#16B583" },
  { id: "travel", label: "Travel", href: "/#travel", color: "#2C3A8F" },
  { id: "writing", label: "Writing", href: "/#writing", color: "#E2557F" },
];

export const sectionColor = (id: SectionId) =>
  sections.find((s) => s.id === id)!.color;

export const profile = {
  name: "Réna Hajjar",
  tagline: "researcher · musician · artist · traveller",
  intro:
    "I'm a master's student at Queen's University in the Laboratory for Percutaneous Surgery (Perk Lab), where I build real-time navigation tools for cancer surgery. I come from computer science and data science, and I'm working toward a career that blends research with medicine.",
  more:
    "Outside the lab you'll find me painting (acrylics since I was ten, oils more recently), playing guitar, climbing, and planning the next trip. This site is a peek at all of it.",
  cv: "/RSH_CV_2024.pdf",
  email: "21rsh8@queensu.ca",
  github: "https://github.com/rena-hajjar",
  linkedin: "https://www.linkedin.com/in/rena-hajjar",
  photo: "/me.webp",
};

export const research = {
  current: {
    title: "Real-time navigation for breast-conserving surgery",
    where: "Master's thesis · Perk Lab, Queen's University",
    supervisor: "Supervised by Dr. Gabor Fichtinger",
    summary:
      "During breast-conserving surgery, surgeons need to know whether any tumour was left behind. My thesis combines electromagnetically tracked intraoperative ultrasound with deep-learning segmentation (nnU-Net) to reconstruct the surgical cavity in 3D and flag residual tumour while the patient is still on the table.",
    tags: ["Ultrasound", "nnU-Net", "EM tracking", "3D Slicer", "Point clouds"],
  },
  past: [
    {
      title: "Undergraduate ML Research Student",
      where: "Perk Lab, Queen's University",
      date: "Oct 2023 – Apr 2026",
      points: [
        "Surgical object recognition with YOLOv8 and ultrasound mask generation with Meta's Segment Anything Model",
        "CNN + LSTM models for surgical task identification from video",
        "Data pipelines into 3D Slicer modules; annotation and preparation of surgical video for training",
      ],
    },
  ],
  projects: [
    {
      title: "Med-i Injection Simulator",
      image: "/injection-sim.webp",
      summary:
        "A metric-based training tool for clinical injections. An OptiTrack camera and 3D-printed markers on the needle stream through PLUS into 3D Slicer, so students see the needle's angle and depth on a phantom in real time.",
      tags: ["Optical tracking", "3D Slicer", "PLUS toolkit"],
    },
  ],
};

export const work = [
  {
    role: "Data Engineer",
    org: "RBC Amplify",
    date: "May – Aug 2025",
    points: [] as string[],
  },
  {
    role: "Machine Learning Software Engineer",
    org: "RBC Borealis",
    date: "Jan – Apr 2025",
    points: [] as string[],
  },
  {
    role: "Backend Software & Data Engineer Intern",
    org: "Ontario Public Service",
    date: "May – Sep 2024",
    points: [
      "Built Spring Boot API endpoints and an Angular front end to modernize a 20-year-old public website",
      "Moved client data flows onto Azure Data Factory ETL pipelines; Databricks and Power BI for a ServiceOntario call centre",
      "Led the project's architecture documentation: data models, user flows and security",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Readwise",
    date: "May – Sep 2023",
    points: [
      "Co-authored the Notebook feature in Readwise Reader (React, TypeScript)",
      "25+ pull requests merged during a stretch where the product grew by 8,000 customers",
    ],
  },
];

export const education = [
  { degree: "Master's student", org: "Queen's University", date: "2026 – present" },
  {
    degree: "Bachelor of Computing (Honours)",
    org: "Queen's University",
    date: "2022 – 2026",
  },
];

export const projects = [
  {
    title: "Fresh Save",
    image: "/freshsave.webp",
    summary:
      "A 48-hour hackathon build to cut food waste in Kingston: MongoDB inventory, OpenAI-generated meal kits from food near expiry, and a React app for same-day nonprofit pickups.",
    link: "https://github.com/SaulWolkove/QHACKS24",
  },
  {
    title: "Good Reads for Nerds",
    image: "/grfn.webp",
    summary:
      "A React + Spring Boot app for commenting on and annotating individual book chapters, with book-club features on the way.",
    link: "https://github.com/rena-hajjar/GoodReadsForNerds",
  },
];

export const community = [
  { org: "Holland Bloorview Kids Rehabilitation Hospital", role: "Volunteer" },
  { org: "Queen's Women in Computing", role: "HackHer Coordinator" },
  { org: "Smith Business & Tech", role: "Logistics Director" },
  { org: "Queen's Climbing Club", role: "Climber" },
];

export const art = {
  intro:
    "I've painted in acrylic since I was ten, and only recently started working in oils. As a perfectionist, I find it hard not to be good at something straight away — painting is how I practise being patient with that.",
  pieces: [
    { title: "Water Swim", src: "/art/water-swim.webp", w: 1366, h: 1060 },
    { title: "Flower Head", src: "/art/flower-head.webp", w: 1104, h: 1522 },
    { title: "Blond", src: "/art/frank.webp", w: 1142, h: 1394 },
    { title: "Hendrix", src: "/art/jimmy.webp", w: 876, h: 930 },
    { title: "Hummingbird", src: "/art/old-birds.webp", w: 746, h: 556 },
    { title: "Ballet", src: "/art/ballet.webp", w: 1249, h: 1600 },
    { title: "Orange", src: "/art/orange.webp", w: 1600, h: 1200 },
    { title: "Drums", src: "/art/christie-drums.webp", w: 1600, h: 857 },
    { title: "Birds at Sea", src: "/art/birds.webp", w: 1600, h: 1200 },
    { title: "Finger Painting", src: "/art/finger-painting.webp", w: 1094, h: 1600 },
    { title: "Perspective Study", src: "/art/perspective.webp", w: 902, h: 915 },
  ],
};

export const music = {
  intro:
    "Guitar is my favourite way to switch off. I'll be adding recordings, covers and the songs I'm learning here soon.",
  photo: "/music/cover.webp",
  mural: "/music/music.webp",
  // Add tracks here when ready: { title, note, link } — links can be
  // SoundCloud, YouTube, Spotify, Instagram, etc.
  tracks: [] as { title: string; note?: string; link?: string }[],
};

// Add trips here: { place, year, note, color }
export const travel = [] as {
  place: string;
  year?: string;
  note?: string;
}[];

export const writing = {
  substack: "", // paste your Substack URL here when it's live
  blurb:
    "I'm starting a Substack about research, medicine, and figuring things out along the way. First posts coming soon.",
};
