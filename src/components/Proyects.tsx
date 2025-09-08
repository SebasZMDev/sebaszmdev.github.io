import "../styles/ProyectsStyles.css";
import ShinyText from "../components/effects/ShinyText.tsx";
import LightRays from "./effects/LightRays.tsx";
import overfocus from "../assets/overfocus.png"
import mystats from "../assets/mystats.png"
import blogrooms from "../assets/blogrooms.png"
import zenithflow from "../assets/zenithflow.png"
import thenewlook from "../assets/TheNewLook.png"
import { useState } from "react";

const projectsData = [
  {
    title: "OverFocus",
    description: "A productivity app designed to help users stay focused by reducing phone distractions. It features a focus mode that limits phone usage during work sessions and sends daily reminders (3 times a day) to keep users aligned with their goals.",
    link:'https://youtube.com/shorts/q0pW_-jCzQ0',
    image:
      overfocus,
    technologies: [
      {
        name: "Typescript",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
      },
      {
        name: "ReactNative",
        icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      },
            { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    ],
  },
  {
    title: "MyStats",
    description: "A time-tracking and self-development app where users assign time goals to personal activities like coding, studying, or working out. At the end of the day, users can log their efforts, claim experience points, and visualize how they spent their time.",
    link:'https://youtube.com/shorts/USS5tdxxBrg',
    image:
      mystats,
    technologies: [
      {
        name: "Flutter",
        icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
      },
            {
        name: "Dart",
        icon: "https://cdn.worldvectorlogo.com/logos/dart.svg",
      },
                  {
        name: "Android",
        icon: "https://cdn.worldvectorlogo.com/logos/android-6.svg",
      },

    ],
  },
  {
    title: "ZenithFlow",
    description: "A minimal and functional Trello-style task manager. Designed for simplicity and productivity, it allows users to create, organize, and move tasks across customizable boards.",
    link:'https://youtu.be/wc2aUt9_C60',
    image:
      zenithflow,
    technologies: [
      {
        name: "Typescript",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        name: "React",
        icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      },
      {
        name: "GSAP",
        icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
      },
      { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    ],
  },
  {
    title: "TheNewLook AAS",
    description: "A desktop app for managing and organizing data, built with Electron. Designed with a focus on local data handling, it's a tool for structured data entry, visualization, or categorization workflows.",
    link:'https://youtu.be/bzyp2kawXHE',
    image:
      thenewlook,
    technologies: [
      {
        name: "Electron.js",
        icon: "https://cdn.worldvectorlogo.com/logos/electronjs.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "Typescript",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        name: "Little SQL",
        icon: "https://cdn.worldvectorlogo.com/logos/amazon-database.svg",
      },
      { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    ],
  },
  {
    title: "BlogRooms",
    description: "A lightweight Twitter clone where users can post, like, and interact with short-form content. Built to replicate core social media features with a clean UI and modern frontend stack.",
    link:'https://youtu.be/eHnXIf1dOWM',
    image:
      blogrooms,
    technologies: [
      {
        name: "Next.js",
        icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "SQL Server",
        icon: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg",
      },
      { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    ],
  },
];

const Proyects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "left" | "right") => {
    setCurrentIndex((prev) => {
      if (direction === "left") return Math.max(prev - 1, 0);
      if (direction === "right") return Math.min(prev + 1, projectsData.length - 1);
      return prev;
    });
  };

  const currentProject = projectsData[currentIndex];

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#f7f1a7ff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      <div className="projects-container">
        <ShinyText text="Proyects" disabled={false} speed={3} className="title" />

        <button
          className="scroll-btn left"
          onClick={() => handleNavigation("left")}
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <button
          className="scroll-btn right"
          onClick={() => handleNavigation("right")}
          disabled={currentIndex === projectsData.length - 1}
        >
          ▶
        </button>

<div className="projects-single">
  <div className="project-card">
    <div className="project-image-wrapper">
      <img
        src={currentProject.image}
        alt={currentProject.title}
        className="project-image"
      />
    </div>
    <div className="project-content">
      <a className="project-title" target="_blank" href={currentProject.link} >{currentProject.title}</a>
      <p className="project-description">{currentProject.description}</p>
      <div className="project-technologies">
        {currentProject.technologies.map((tech, i) => (
          <img
            key={i}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="tech-icon"
          />
        ))}
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Proyects;