import { useEffect, useState } from 'react'
import h from '../Hero/Hero.module.scss'
import { logoBl, logoWh, me } from '../../../js/reExport.js'

const Hero = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (isDark) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const Theme = () => setIsDark(!isDark);


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
    return (
        <>
            {/* header start */}

            <header className={`${h.header} ${isScrolled ? h.scrolled : ''}`}>
                <nav className={`${h.header__nav} container`}>
                    <a href={`https://github.com/Venum64`} className={h.header__logo}>
                        <img src={isDark ? logoWh : logoBl} alt="" />
                    </a>
                    <ul className={h.header__nav_list}>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link} >About</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Experience</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Services</a>
                        </li>
                        <li className={h.header__nav_list_item}>
                            <a href="#" className={h.header__nav_list_item_link}>Portfolio</a>
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
                            <a href={`https://github.com/Venum64`} className={h.review__l_a}>
                                <span className={h.review__l_icon}>
                                    <i class="fa-brands fa-github" ></i>
                                </span>
                            </a>
                            <a href={`https://t.me/premuim_sss`} className={h.review__l_a}>
                                <span className={h.review__l_icon}>
                                    <i class="fa-brands fa-telegram"></i>
                                </span>
                            </a>
                            <a href={`tel:+998910372011`} className={h.review__l_a} >
                                <span className={h.review__l_icon}>
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                            </a>
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