import s from '../Services/Services.module.scss'
import { globe, layout, frontend, mobile, light, api } from '../../js/reExport.js'
import { useTranslation } from 'react-i18next'

const Services = () => {

  const {t} = useTranslation()

 const cardsAdd = [
  {
    id: 1,
    icon: globe,
    title: t("services.card.title.webDev"),
    desc: t("services.card.desc.webDev"),
    features: t("services.card.features.webDev", { returnObjects: true }),
  },
  {
    id: 2,
    icon: layout,
    title: t("services.card.title.uiuxDesign"),
    desc: t("services.card.desc.uiuxDesign"),
    features: t("services.card.features.uiuxDesign", { returnObjects: true }),
  },
  {
    id: 3,
    icon: frontend,
    title: t("services.card.title.frontendDev"),
    desc: t("services.card.desc.frontendDev"),
    features: t("services.card.features.frontendDev", { returnObjects: true }),
  },
  {
    id: 4,
    icon: mobile,
    title: t("services.card.title.responsive"),
    desc: t("services.card.desc.responsive"),
    features: t("services.card.features.responsive", { returnObjects: true }),
  },
  {
    id: 5,
    icon: light,
    title: t("services.card.title.performance"),
    desc: t("services.card.desc.performance"),
    features: t("services.card.features.performance", { returnObjects: true }),
  },
  {
    id: 6,
    icon: api,
    title: t("services.card.title.api"),
    desc: t("services.card.desc.api"),
    features: t("services.card.features.api", { returnObjects: true }),
  },
]

  return (
    <section className={s.services}>
      <h2 className={s.services_title}>{t('services.title')}</h2>
      <p className={s.services_subtitle}>{t('services.subtitle')}</p>
      <div className={`container ${s.services__block}`}>
        {cardsAdd.map((card) => (
          <div key={card.id} className={s.services__card}>
            <span className={s.services__card_i}>
              <img src={card.icon} alt={{}}  />
            </span>
            <h3 className={s.services__card_h}>{card.title}</h3>
            <p className={s.services__card_p}>{card.desc}</p>
            <ul className={s.services__card_list}>
              {card.features.map((item, index) => (
                <li key={index} className={s.services__card_list_wrapper}>
                  <span className={s.services__card_list_icon}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                  <p className={s.services__card_list_text}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
