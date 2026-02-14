import { useEffect, useState } from 'react'
import h from '../Hero/Hero.module.scss'
import { logoBl, logoWh, me } from '../../../js/reExport.js'
import { useTheme } from '../../../js/theme.js'

const Hero = () => {
    const [isDark, Theme] = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const iconsAdd = [
        {
            id: 1,
            l: `https://github.com/Venum64`,
            i: 'fa-brands fa-github',
        },
        {
            id: 2,
            l: `https://t.me/premuim_sss`,
            i: 'fa-brands fa-telegram',
        },
        {
            id: 3,
            l: `tel:+998910372011`,
            i: 'fa-solid fa-phone',
        },
    ]


    return (
        <>
            {/* header start */}

            <header className={`${h.header} ${isScrolled ? h.scrolled : ''}`}>
                <nav className={`${h.header__nav} container`}>
                    <a href={`#`} className={h.header__logo}>
                        <img src={isDark ? logoWh : logoBl} alt="" />
                    </a>
                    <ul className={h.header__nav_list}>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>About</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Skills</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Services</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Projects</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Contacts</a>
                        </li>
                    </ul>
                    <div className={h.header__nav_icons}>
                        <span className={h.header__nav_icon}>RU</span>
                        <span className={h.header__nav_icon} onClick={Theme} style={{ cursor: 'pointer' }}>
                            <i className={isDark ? "fa-sharp fa-regular fa-moon" : "fa-sharp fa-solid fa-moon"}
                                style={{ color: isDark ? "#fff" : "rgb(40, 40, 40)" }}></i>
                        </span>
                    </div>
                </nav>
            </header>

            {/* header end */}

            {/* review start */}

            <section className={h.review}>
                <div className={`container ${h.review__content}`}>
                    <div className={h.review__l}>
                        <h2 className={h.review__l_h}>Hello my name is Umarkhon</h2>
                        <h3 className={h.review__l_s}>Frontend Developer | Web Developer</h3>
                        <p className={h.review__l_p}>I create modern web applications with a focus on clean code, performance, and visual aesthetics. I specialize in React and modern JavaScript technologies.</p>
                        <div className={h.review__l_btns}>
                            <button className={h.review__l_btn} >Contacts</button>
                            <button className={h.review__l_btn}>My projects</button>
                        </div>
                        <div className={h.review__l_icons}>
                            {iconsAdd.map((i) => (
                                <a href={i.l} className={h.review__l_a} key={i.id}>
                                    <span className={h.review__l_icon}>
                                        <i className={i.i} ></i>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={h.review__r}>
                        <img src={me} alt="" />
                    </div>
                </div>
            </section>

            {/* review end */}
        </>
    );
}

export default Hero