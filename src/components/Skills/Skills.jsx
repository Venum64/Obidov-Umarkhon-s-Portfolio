import { useEffect, useState, useRef } from 'react';
import s from './Skills.module.scss';
import SkillsBar from './SkillsBar.jsx'
import { useTranslation } from 'react-i18next';
import useFadeEffects from '../../js/animations.js';


const Skills = () => {

  useFadeEffects('.speed')
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

  const { t } = useTranslation()
  const data = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { label: "HTML", percentage: 80 },
        { label: "CSS", percentage: 75 },
        { label: "JavaScript", percentage: 80 },
        { label: "React", percentage: 75 },
      ]
    },
    {
      title: t('skills.categories.styling'),
      skills: [
        { label: "Sass/SCSS", percentage: 75 },
        { label: "Responsive Design", percentage: 80 },
        { label: "CSS Animations", percentage: 70 },
      ]
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { label: "Git", percentage: 75 },
        { label: "Figma", percentage: 70 },
        { label: "VS Code", percentage: 70 },
      ]
    }
  ];

  return (
    <section className={s.skillsSection} ref={sectionRef} id='skills'>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={`${s.skills__title} speed from-bottom`} data-speed='1250'>{t("skills.title")}</h2>
          <p className='speed from-bottom' data-speed='1350 '>{t('skills.subtitle')}</p>
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