import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next, Translation } from "react-i18next";
import translationEN from "../../public/locales/en.json";
import translationRU from "../../public/locales/ru.json";

const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    }
}

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;