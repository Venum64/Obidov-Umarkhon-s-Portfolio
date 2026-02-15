import { useTranslation } from 'react-i18next';
import { antools, food, santek, totembo, virtual, vue } from '../../js/reExport';
import p from '../Projects/Projects.module.scss';

const Portfolio = () => {

  const { t } = useTranslation()

  const cardsAdd = [
    {
      id: 1,
      img: antools,
      h: t("projects.items.antools"),
      p: t("projects.descriptions.antools"),
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Antools`,
      l: `https://venum64.github.io/Antools/`,
    },
    {
      id: 2,
      img: santek,
      h: t("projects.items.santek"),
      p: t("projects.descriptions.santek"),
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/Santek_web`,
      l: `https://venum64.github.io/Santek_web/`,
    },
    {
      id: 3,
      img: virtual,
      h: t("projects.items.zone"),
      p: t("projects.descriptions.zone"),
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/Zone`,
      l: `https://venum64.github.io/Zone/`,
    },
    {
      id: 4,
      img: totembo,
      h: t("projects.items.totembo"),
      p: t("projects.descriptions.totembo"),
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Totembo`,
      l: `https://venum64.github.io/Totembo/`,
    },
    {
      id: 6,
      img: vue,
      h: t("projects.items.vueCinemas"),
      p: t("projects.descriptions.vueCinemas"),
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Vuecinemas`,
      l: `https://venum64.github.io/Vuecinemas/`,
    },
    {
      id: 7,
      img: food,
      h: t("projects.items.food100"),
      p: t("projects.descriptions.food100"),
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/FOOD_100`,
      l: `https://venum64.github.io/FOOD_100/`,
    },
  ];

  return (
    <section className={p.portfolio}>
      <h2 className={p.portfolio_title}>{t('projects.title')}</h2>
      <p className={p.portfolio_subtitle}>{t("projects.subtitle")}</p>

      <div className={`container ${p.portfolio__content}`}>
        {cardsAdd.map((card) => (
          <div className={p.portfolio__card} key={card.id}>
            <div className={p.portfolio__card_img}>
              <img src={card.img} alt={card.h} />
            </div>
            <h3 className={p.portfolio__card_h}>{card.h}</h3>
            <p className={p.portfolio__card_p}>{card.p}</p>
            <ul className={p.portfolio__card_skills}>
              {card.skills.map((skill, index) => (
                <li key={index} className={p.portfolio__card_skills_item}>{skill}</li>
              ))}
            </ul>
            <div className={p.portfolio__card_bottom}>
              <a className={p.portfolio__card_bottom_a} href={card.a} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i> Code</a>
              <a className={p.portfolio__card_bottom_l} href={card.l} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Show Website</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
