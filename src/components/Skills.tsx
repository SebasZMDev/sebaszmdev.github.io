import "../styles/SkillsStyles.css";

const skillsData = [
  { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "ReactNative", icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
  { name: "ReactNative", icon: "https://cdn.worldvectorlogo.com/logos/electronjs.svg" },
  { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" },
  { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
      { name: "Dart", icon: "https://cdn.worldvectorlogo.com/logos/dart.svg" },
      {name:'English B2', icon: "https://cdn.worldvectorlogo.com/logos/english-first.svg"}
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
