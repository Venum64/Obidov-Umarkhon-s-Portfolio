import c from '../Contacts/Contacts.module.scss'

const Contacts = () => {
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

  ]

  const addR = [
    {
      id: 1,
      i: "fa-brands fa-telegram",
      l: `https://t.me/premuim_sss`,
      text: "Telegram",
    },
    {
      id: 2,
      i: "fa-brands fa-github",
      l: `https://github.com/Venum64`,
      text: "GitHub",
    },
    {
      id: 3,
      l: `https://t.me/premuim_sss`,
      text: "Telegram",
    },
  ]

  return (
    <section className={c.contacts}>
      <h2 className={c.contacts__title}>Get In Touch</h2>
      <p className={c.contacts__subtitle}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
      <div className={`container ${c.contacts__blocks}`}>
        <h3 className={c.contacts__h}>Contact Information</h3>
        {addLink.map((item) => (
          <ul className={c.contacts__list} key={item.id}>
            <span className={c.contacts__list_i}>
              <i className={item.icon}></i>
            </span>
            <li className={c.contacts__list_item}>
              <p className={c.contacts__list_item_p}>{item.title}</p>
              <a href={item.link} className={c.contacts__list_item_l}>{item.text}</a>
            </li>
          </ul>
        ))}

        <div className={c.contacts__right} >
          {addR.map((i) => (
            <a className={c.contacts__right_i} href={i.l} key={i.id}>
              <i class="fa-brands fa-telegram"></i> {i.text}
            </a>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Contacts