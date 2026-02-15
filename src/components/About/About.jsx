import React from 'react'
import a from '../About/About.module.scss'
import { me } from '../../js/reExport'
import { useTranslation } from 'react-i18next';
import useFadeEffects from '../../js/animations.js'

const About = () => {
  useFadeEffects('.speed')
  const { t } = useTranslation()

  const cardsData = [
    {
      id: 1,
      icon: "fa-solid fa-code",
      title: t('about.features.cleanCode.title'),
      text: t('about.features.cleanCode.desc')
    },
    {
      id: 2,
      icon: "fa-solid fa-bezier-curve",
      title: t('about.features.uiux.title'),
      text: t('about.features.uiux.desc'),
    },
    {
      id: 3,
      icon: "fa-solid fa-brain",
      title: t('about.features.fastLearner.title'),
      text: t('about.features.fastLearner.desc'),
    },
  ];

  const journeyData = {
    title: t('about.journey.title'),
    text: t('about.journey.text1'),
    desc: t('about.journey.text2'),
  };

  return (
    <section className={`${a.biography} speed`} data-speed='1000'>
      <h2 className={a.title}>{t('about.abouttitle')}</h2>
      <h3 className={a.subtitle}>{t('about.aboutsub')}</h3>
      <div className={`container ${a.biography__content}`}>
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