import s from '../Services/Services.module.scss'
import { globe, layout, frontend, mobile, light, api } from '../../js/reExport.js'

const Services = () => {
  const cardsAdd = [
    {
      id: 1,
      icon: globe,
      title: "Web Development",
      features: ["Custom Design", "SEO Optimized", "Fast Loading"],
      desc: "Building responsive and modern websites using the latest technologies and best practices.",
    },
    {
      id: 2,
      icon: layout,
      title: "UI/UX Design",
      features: ["Wireframing", "Prototyping", "User Research"],
      desc: "Creating beautiful and intuitive user interfaces that provide excellent user experience.",
    },
    {
      id: 3,
      icon: frontend,
      title: "Frontend Development",
      features: ["React/Next.js", "TypeScript", "State Management"],
      desc: "Developing interactive web applications with React, TypeScript, and modern frameworks.",
    },
    {
      id: 4,
      icon: mobile,
      title: "Responsive Design",
      features: ["Mobile-First", "Cross-Browser", "Adaptive Layout"],
      desc: "Ensuring your website looks perfect on all devices, from mobile to desktop.",
    },
    {
      id: 5,
      icon: light,
      title: "Performance Optimization",
      features: ["Code Splitting", "Lazy Loading", "Caching"],
      desc: "Optimizing websites for speed and performance to improve user engagement.",
    },
    {
      id: 6,
      icon: api,
      title: "API Integration",
      features: ["REST APIs", "GraphQL", "Authentication"],
      desc: "Integrating third-party services and APIs to extend your website functionality.",
    },
  ]

  return (
    <section className={s.services}>
      <h2 className={s.services_title}>What I Offer</h2>
      <p className={s.services_subtitle}>Comprehensive web development services to help bring your ideas to life with modern technologies and best practices.</p>
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
