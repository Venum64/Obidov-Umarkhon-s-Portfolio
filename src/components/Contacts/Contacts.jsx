import c from '../Contacts/Contacts.module.scss'
import { useTheme } from '../../../js/theme.js'
import { logoBl, logoWh } from '../../../js/reExport.js'

const Contacts = () => {
  const [isDark] = useTheme()

  const addLink = [
    {
      id: 1,
      icon: 'fa-regular fa-envelope',
      title: 'Email',
      link: 'mailto:umarhonobidov400@gmail.com',
      text: 'umarhonobidov400@gmail.com',
    },
    {
      id: 2,
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      link: 'tel:+998910372011',
      text: '+998-91-037-20-11',
    },
    {
      id: 3,
      icon: 'fa-solid fa-location-dot',
      title: "Location",
      link: `https://share.google/aBzkyJdQ2OppoRlJW`,
      text: 'Tashkent, Yunusabad region',
    },
    {
      id: 4,
      icon: "fa-brands fa-telegram",
      link: `https://t.me/premuim_sss`,
      text: "@premium_sss",
      title: "Telegram",
    },
    {
      id: 5,
      icon: "fa-brands fa-github",
      link: `https://github.com/Venum64`,
      title: "GitHub",
      text: "Venum64"
    },
    {
      id: 6,
      icon: "fa-brands fa-instagram",
      link: `https://www.instagram.com/premium__sss`,
      title: "Instagram",
      text: "@premium__sss"
    },
  ]

  const footerLinks = [
    {
      id: 1,
      title: "Navigation",
      text: [
        "About Me",
        "Skills",
        "Services",
        "Projects",
        "Contacts",
      ]
    },
    {
      id: 2,
      title: "Services",
      text: [
        "Web Development",
        "UI/UX Design",
        "Frontend Development",
        "Responsive Design",
        "API Integration",
      ]
    },
    {
      id: 3,
      title: "Resources",
      text: [
        "Blog",
        "Portfolio",
        "Resume/CV",
        "Case Studies",
        "Testimonials",
      ]
    },
    {
      id: 4,
      title: "Connect",
      text: ["Follow me on social media"], 
    },
  ]

  return (
    <>
      {/* contacts start */}

      <section className={c.contacts}>
        <h2 className={c.contacts__title}>Get In Touch</h2>
        <p className={c.contacts__subtitle}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
        <div className={`container`}>
          <h3 className={c.contacts__h}>Contact Information</h3>
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
          <p className={c.contacts__p}>I'm open to discussing web development projects, creative ideas, or partnership opportunities.</p>
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
            <p className={c.footer__logo_text}>Passionate frontend developer specializing in creating beautiful, responsive web experiences. Let's build something amazing together.</p>
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