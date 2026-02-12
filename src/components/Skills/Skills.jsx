import { useEffect, useState, useRef } from 'react';
import s from './Skills.module.scss';
import SkillsBar from './SkillsBar.jsx'

const Skills = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      title: "Frontend",
      skills: [
        { label: "HTML", percentage: 80 },
        { label: "CSS", percentage: 75 },
        { label: "JavaScript", percentage: 80 },
        { label: "React", percentage: 75 },
      ]
    },
    {
      title: "Styling",
      skills: [
        { label: "Sass/SCSS", percentage: 75 },
        { label: "Responsive Design", percentage: 80 },
        { label: "CSS Animations", percentage: 70 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { label: "Git", percentage: 75 },
        { label: "Figma", percentage: 70 },
        { label: "VS Code", percentage: 70 },
      ]
    }
  ];

  return (
    <section className={s.skillsSection} ref={sectionRef}>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.skills__title}>Skills & Technologies</h2>
          <p>Here are the technologies and tools I work with to bring ideas to life.</p>
        </div>

        <div className={s.grid}>
          {data.map((group, id) => (
            <div key={id} className={s.category}>
              <h3>{group.title}</h3>
              {group.skills.map((skill, sId) => (
                <SkillsBar 
                  key={sId} 
                  label={skill.label} 
                  percentage={skill.percentage} 
                  isVisible={isIntersecting} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;