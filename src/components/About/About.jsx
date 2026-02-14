import React from 'react'
import a from '../About/About.module.scss'
import { me } from '../../js/reExport'


const About = () => {
  const cardsData = [
    {
      id: 1,
      icon: "fa-solid fa-code",
      title: "Clean Code",
      text: "Creating maintainable, efficient, and readable code using modern standards."
    },
    {
      id: 2,
      icon: "fa-solid fa-bezier-curve",
      title: "UI/UX Focus",
      text: "Designing intuitive interfaces with a focus on great user experience.",
    },
    {
      id: 3,
      icon: "fa-solid fa-brain",
      title: "Fast Learner",
      text: "Quickly mastering new technologies and staying ahead of industry trends.",
    },
  ];

  const journeyData = {
    title: "My Journey",
    text: "My journey into web development started with a curiosity about how websites work. Since then, I've been dedicated to learning and improving my skills every day.",
    desc: "I've completed several personal projects and freelance work, which has given me hands-on experience with modern frontend technologies. I'm now looking for opportunities to grow as part of a collaborative team.",
  };

  return (
    <section className={a.biography}>
      <h2 className={a.title}>About Me</h2>
      <h3 className={a.subtitle}>
        I'm a passionate junior frontend developer with a love for creating engaging web experiences.
      </h3>
      <div className={`container ${a.biography__content}`}>
        <div className={a.biography_img}>
          <img src={me} alt="" />
        </div>
        <div className={a.biography__grid}>
          {cardsData.map((card) => (
            <div key={card.id} className={a.biography_card}>
              <span className={a.biography_card_i}>
                <i className={card.icon}></i>
              </span>
              <h3 className={a.biography_card_h}>{card.title}</h3>
              <p className={a.biography_card_p}>{card.text}</p>
            </div>
          ))}
          <div className={a.journey_card}>
            <h3 className={a.biography_card_h}>{journeyData.title}</h3>
            <p className={a.biography_card_p}>{journeyData.text}</p>
            <p className={a.biography_card_p}>{journeyData.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About