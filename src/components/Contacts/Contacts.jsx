import c from '../Contacts/Contacts.module.scss'
import { useTheme } from '../../js/Theme.js'
import { logoBl, logoWh } from '../../js/reExport.js'
import { useTranslation } from 'react-i18next'

const Contacts = () => {

  const { t } = useTranslation()

  const [isDark] = useTheme()

  const addLink = [
    {
      id: 1,
      icon: 'fa-regular fa-envelope',
      title: t("contact.contactTitles.email"),
      link: 'mailto:umarhonobidov400@gmail.com',
      text: 'umarhonobidov400@gmail.com',
    },
    {
      id: 2,
      icon: 'fa-solid fa-phone',
      title: t("contact.contactTitles.phone"),
      link: 'tel:+998910372011',
      text: '+998-91-037-20-11',
    },
    {
      id: 3,
      icon: 'fa-solid fa-location-dot',
      title: t("contact.contactTitles.location"),
      link: 'https://share.google/aBzkyJdQ2OppoRlJW',
      text: t("contact.details.locationText"),
    },
    {
      id: 4,
      icon: "fa-brands fa-telegram",
      link: 'https://t.me/premuim_sss',
      text: "@premium_sss",
      title: t("contact.contactTitles.telegram"),
    },
    {
      id: 5,
      icon: "fa-brands fa-github",
      link: 'https://github.com/Venum64',
      title: t("contact.contactTitles.github"),
      text: "Venum64"
    },
    {
      id: 6,
      icon: "fa-brands fa-instagram",
      link: 'https://www.instagram.com/premium__sss',
      title: t("contact.contactTitles.instagram"),
      text: "@premium__sss"
    },
  ];
  const footerLinks = [
    {
      id: 1,
      title: t("footer.navTitle"),
      text: [
        t("navigation.about"),
        t("navigation.skills"),
        t("navigation.services"),
        t("navigation.projects"),
        t("navigation.contacts"),
      ]
    },
    {
      id: 2,
      title: t("footer.servicesTitle"),
      text: [
        t("services.card.title.webDev"),
        t("services.card.title.uiuxDesign"),
        t("services.card.title.frontendDev"),
        t("services.card.title.responsive"),
        t("services.card.title.api"),
      ]
    },
    {
      id: 3,
      title: t("footer.resourcesTitle"),
      text: [
        t("footer.links.blog"),
        t("footer.links.portfolio"),
        t("footer.links.resume"),
        t("footer.links.caseStudies"),
        t("footer.links.testimonials"),
      ]
    },
    {
      id: 4,
      title: t("footer.connectTitle"),
      text: [t("footer.follow")],
    },
  ];

  return (
    <>
      {/* contacts start */}

      <section className={c.contacts}>
        <h2 className={c.contacts__title}>{t('contact.title')}</h2>
        <p className={c.contacts__subtitle}>{t('contact.subtitle')}</p>
        <div className={`container`}>
          <h3 className={c.contacts__h}>{t('contact.infoTitle')}</h3>
          <div className={c.contacts__block}>
            <div className={c.contacts__left}>
              {addLink.filter(item => item.id <= 3).map((item) => (
                <ul className={c.contacts__list} key={item.id}>
                  <span className={c.contacts__list_i}>
                    <i className={item.icon}></i>
                  </span>
                  <li className={c.contacts__list_item}>
                    <h3 className={c.contacts__list_item_h}>{item.title}</h3>
                    <a href={item.link} className={c.contacts__list_item_l} target='_blank'>{item.text}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className={c.contacts__right}>
              {addLink.filter(item => item.id > 3).map((item) => (
                <ul className={c.contacts__list} key={item.id}>
                  <span className={c.contacts__list_i}>
                    <i className={item.icon}></i>
                  </span>
                  <li className={c.contacts__list_item}>
                    <h3 className={c.contacts__list_item_h}>{item.title}</h3>
                    <a href={item.link} className={c.contacts__list_item_l} target='_blank'>{item.text}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <p className={c.contacts__p}>{t('contact.footerNote')}</p>
        </div>
      </section>

      {/* contacts end */}

      {/* footer start */}

      <footer className={c.footer}>
        <section className={`container ${c.footer__block}`}>
          <div className={c.footer__info}>
            <a href={`#`} className={c.footer__logo}>
              <img src={isDark ? logoWh : logoBl} alt="" />
            </a>
            <p className={c.footer__logo_text}>{t('footer.brandDesc')}</p>
            {addLink.filter(item => item.id <= 3).map((item) => (
              <ul className={c.footer__info_list} key={item.id}>
                <a href={item.link} className={c.footer__info_list_l} target='_blank'>
                  <span className={c.footer__info_list_l_i}>
                    <i className={item.icon}></i>
                  </span>
                  <p className={c.footer__info_list_l_p}>{item.text}</p>
                </a>
              </ul>
            ))}
          </div>
          <div className={c.footer__links}>
            {footerLinks.map((item) => (
              <ul className={c.footer__list} key={item.id}>
                <h2 className={c.contacts__list_h}>{item.title}</h2>
                {item.text.map((i, index) => (
                  <li className={c.footer__list_item} key={index}>
                    <a href={{}} className={c.footer__list_item_link}>{i}</a>
                  </li>
                ))}
              </ul>
            ))}</div>
        </section>
      </footer>

      {/* footer end */}
    </>
  )
}

export default Contacts