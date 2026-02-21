import { useEffect, useState } from 'react'
import h from '../Hero/Hero.module.scss'
import { logoBl, logoWh } from '../../utils/reExport.js'
import { useTheme } from '../../js/Theme.js'
import { useTranslation } from 'react-i18next'
import useFadeEffects from '../../js/animations.js'

const Typewriter = ({ text, speed = 70 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayedText('');
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

const Hero = () => {
    useFadeEffects('.speed')
    const [isDark, Theme] = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const iconsAdd = [
        { id: 1, l: `https://github.com/Venum64`, i: 'fa-brands fa-github' },
        { id: 2, l: `https://t.me/premuim_sss`, i: 'fa-brands fa-telegram' },
        { id: 3, l: `tel:+998910372011`, i: 'fa-solid fa-phone' },
    ]

    const { i18n, t } = useTranslation()
    const [language, setLanguage] = useState(i18n.language)

    const changeLanguage = () => {
        let currentLang = language === "en" ? "ru" : "en"
        setLanguage(currentLang)
        i18n.changeLanguage(currentLang)
    }

    return (
        <>
            <header className={`${h.header} ${isScrolled ? h.scrolled : ''}`}>
                <nav className={`container ${h.header__nav}`}>
                    <a href={`#`} className={h.header__logo}>
                        <img src={isDark ? logoWh : logoBl} alt="" />
                    </a>
                    <ul className={h.header__nav_list}>
                        <li className={h.header__nav_list_item}><a href="#about" className={h.header__nav_list_item_link}>{t('navigation.about')}</a></li>
                        <li className={h.header__nav_list_item}><a href="#skills" className={h.header__nav_list_item_link}>{t('navigation.skills')}</a></li>
                        <li className={h.header__nav_list_item}><a href="#services" className={h.header__nav_list_item_link}>{t('navigation.services')}</a></li>
                        <li className={h.header__nav_list_item}><a href="#projects" className={h.header__nav_list_item_link}>{t('navigation.projects')}</a></li>
                        <li className={h.header__nav_list_item}><a href="#contacts" className={h.header__nav_list_item_link}>{t('navigation.contacts')}</a></li>
                    </ul>
                    <div className={h.header__nav_icons}>
                        <button className={h.header__nav_btn} onClick={changeLanguage}>{language}</button>
                        <span className={h.header__nav_icon} onClick={Theme} style={{ cursor: 'pointer' }}>
                            <i className={isDark ? "fa-sharp fa-regular fa-moon" : "fa-sharp fa-solid fa-moon"}
                                style={{ color: isDark ? "#fff" : "rgb(40, 40, 40)" }}></i>
                        </span>
                    </div>
                </nav>
            </header>

            <section className={h.review}>
                <div className={`container ${h.review__content}`}>
                    <div className={h.review__l} >
                        <h2 className={`${h.review__l_h} from-left speed`} data-speed='1100'>
                            {t('hero.myname')}
                        </h2>
                        <h3 className={`${h.review__l_s} speed from-left`} data-speed='1150'>
                            <Typewriter text={t('hero.mydev')} />
                        </h3>
                        <p className={`${h.review__l_p} speed from-left`} data-speed='1200'>{t('hero.mydesc')}</p>
                        <div className={`${h.review__l_btns} speed from-left`} data-speed='1250'>
                            <button className={h.review__l_btn}>{t('navigation.contacts')}</button>
                            <button className={h.review__l_btn}>{t('hero.myprojects')}</button>
                        </div>
                        <div className={`${h.review__l_icons} speed from-left`} data-speed='1300'>
                            {iconsAdd.map((i) => (
                                <a href={i.l} className={h.review__l_a} key={i.id}>
                                    <span className={h.review__l_icon}>
                                        <i className={i.i} ></i>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={`${h.review__r} speed from-right`} data-speed='1250'></div>
                </div>
            </section >
        </>
    );
}

export default Hero;