import { antools, food, santek, totembo, virtual, vue } from '../../../js/reExport';
import p from '../Portfolio/Portfolio.module.scss';

const Portfolio = () => {
  const cardsAdd = [
    {
      id: 1,
      img: antools,
      h: "Antools — Curated Directory of Design & Development Tools",
      p: "Find the perfect tools for your next project with Antools. Explore a comprehensive collection of over 430+ free and paid resources carefully selected for designers and developers. From UI kits to coding frameworks, we help you streamline your workflow and boost productivity.",
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Antools`,
      l: `https://venum64.github.io/Antools/`,
    },
    {
      id: 2,
      img: santek,
      h: "Santek — Water heated towel rails",
      p: "A comprehensive e-commerce catalog featuring premium water-heated towel rails. The platform showcases a wide range of modern designs, focusing on technical specifications, durability, and aesthetic appeal.",
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/Santek_web`,
      l: `https://venum64.github.io/Santek_web/`,
    },
    {
      id: 3,
      img: virtual,
      h: "Zone — Virtual Reality Business Solutions & AI Consulting",
      p: "Transform your enterprise with cutting-edge VR and AI technologies. With over 15 years of experience in business consulting, we provide immersive virtual solutions and artificial intelligence integration to drive innovation and growth for your company.",
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/Zone`,
      l: `https://venum64.github.io/Zone/`,
    },
    {
      id: 4,
      img: totembo,
      h: "Totembo — Premium Watches and Luxury Accessories",
      p: "Discover an exclusive collection of men's and women's watches, rings, and elegant jewelry at Totembo. Shop premium brands with international quality, sophisticated design, and special offers on every piece. Elevate your style with our curated selection of timeless accessories.",
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Totembo`,
      l: `https://venum64.github.io/Totembo/`,
    },
    {
      id: 6,
      img: vue,
      h: "Vue Cinemas — Ultimate Movie Streaming Platform",
      p: 'Experience cinema at home with a vast collection of films, serials, and cartoons. Our platform offers high-quality streaming, seamless navigation, and a personalized viewing experience for movie lovers worldwide. Watch your favorite blockbusters like "Kong: Skull Island" and explore curated collections.',
      skills: ["Html", "Css"],
      a: `https://github.com/Venum64/Vuecinemas`,
      l: `https://venum64.github.io/Vuecinemas/`,
    },
    {
      id: 6,
      img: food,
      h: "FOOD100 — Next Level Fast Food Delivery",
      p: "Experience premium quality burgers and combos delivered straight to your door. From our simple classic burgers to the signature Fresh Combo with crispy fries, Food100 offers 100th-level taste and freshness. Quick ordering and high-quality ingredients for the ultimate fast-food experience.",
      skills: ["Html", "Css", "Js"],
      a: `https://github.com/Venum64/FOOD_100`,
      l: `https://venum64.github.io/FOOD_100/`,
    },
  ];


  return (
    <section className={p.portfolio}>
      <h2 className={p.portfolio_title}>Featured Projects</h2>
      <p className={p.portfolio_subtitle}>Here are some of my recent projects that showcase my skills and passion for web development.</p>

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
              <a className={p.portfolio__card_bottom_a} href={card.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Code</a>
              <a className={p.portfolio__card_bottom_l} href={card.l}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Show Website</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
