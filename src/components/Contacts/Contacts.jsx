import c from '../Contacts/Contacts.module.scss'
import { logoBl, logoWh } from '../../js/reExport.js'
import { useTranslation } from 'react-i18next'
import useFadeEffects from '../../js/animations.js'
import { useTheme } from '../../js/Theme.js'

const Contacts = () => {
  const [isDark] = useTheme()
  useFadeEffects('.speed')
  const { t } = useTranslation()
  const addLink = [
    { id: 1, icon: 'fa-regular fa-envelope', title: t("contact.contactTitles.email"), link: 'mailto:umarhonobidov400@gmail.com', text: 'umarhonobidov400@gmail.com' },
    { id: 2, icon: 'fa-solid fa-phone', title: t("contact.contactTitles.phone"), link: 'tel:+998910372011', text: '+998-91-037-20-11' },
    { id: 3, icon: 'fa-solid fa-location-dot', title: t("contact.contactTitles.location"), link: 'https://share.google/aBzkyJdQ2OppoRlJW', text: t("contact.details.locationText") },
    { id: 4, icon: "fa-brands fa-telegram", link: 'https://t.me/premuim_sss', text: "@premium_sss", title: t("contact.contactTitles.telegram") },
    { id: 5, icon: "fa-brands fa-github", link: 'https://github.com/Venum64', title: t("contact.contactTitles.github"), text: "Venum64" },
    { id: 6, icon: "fa-brands fa-instagram", link: 'https://www.instagram.com/premium__sss', title: t("contact.contactTitles.instagram"), text: "@premium__sss" },
  ];

  const footerLinks = [
    {
      id: 1,
      title: t("footer.navTitle"),
      links: [
        { name: t("navigation.about"), hash: "#about" },
        { name: t("navigation.skills"), hash: "#skills" },
        { name: t("navigation.services"), hash: "#services" },
        { name: t("navigation.projects"), hash: "#projects" },
      ]
    },
    {
      id: 2,
      title: t("footer.servicesTitle"),
      links: [
        { name: t("services.card.title.webDev"), hash: "#services" },
        { name: t("services.card.title.uiuxDesign"), hash: "#services" },
        { name: t("services.card.title.frontendDev"), hash: "#services" },
        { name: t("services.card.title.responsive"), hash: "#services" },
      ]
    },
    {
      id: 3,
      title: t("footer.resourcesTitle"),
      links: [
        { name: t("footer.links.blog"), hash: "#about" },
        { name: t("footer.links.portfolio"), hash: "#projects" },
        { name: t("footer.links.resume"), hash: "#" },
        { name: t("footer.links.caseStudies"), hash: "#" },
      ]
    },
    {
      id: 4,
      title: t("footer.connectTitle"),
      links: [
        { name: t("footer.follow"), hash: "#contacts" }
      ]
    },
  ];

  return (
    <>
      {/* contacts start */}

      <section className={c.contacts} id='contacts'>
        <h2 className={`${c.contacts__title} speed from-bottom`} data-speed='1200'>{t('contact.title')}</h2>
        <p className={`${c.contacts__subtitle} speed from-bottom`} data-speed='1250'>{t('contact.subtitle')}</p>
        <div className={`${c.contacts__block} container`}><div>
          <div className={`${c.contacts__left} speed from-left`} data-speed='1300'>
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
        </div>
          <div className={`${c.contacts__right} speed from-right`} data-speed='1300'>
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
        <p className={`${c.contacts__p} speed from-right`} data-speed='1275'>{t('contact.footerNote')}</p>
      </section>

      {/* contacts end */}

      {/* footer start */}

      <footer className={c.footer}>
        <section className={`container ${c.footer__block}`}>
          <div className={`${c.footer__info} from-bottom speed`} data-speed='1350'>
            <a href={`#`} className={c.footer__logo}>
              <img src={isDark ? logoWh : logoBl} alt="" />
            </a>
            <p className={c.footer__logo_text}>{t('footer.brandDesc')}</p>
            <ul className={c.footer__info_list}>
              {addLink.filter(item => item.id <= 3).map((item) => (
                <li key={item.id}>
                  <a href={item.link} className={c.footer__info_list_l} target='_blank'>
                    <i className={item.icon}></i> {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={c.footer__links}>
            {footerLinks.map((item) => (
              <ul className={c.footer__list} key={item.id}>
                <h2 className={`${c.contacts__list_h} speed from-bottom`} data-speed='1250'>{item.title}</h2>
                {item.links.map((link, index) => (
                  <li className={c.footer__list_item} key={index}>
                    <div className="speed from-bottom" data-speed='1300'>
                      <a href={link.hash} className={c.footer__list_item_link}>{link.name}</a>
                    </div>
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