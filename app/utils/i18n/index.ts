// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
import resources from "./translations";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
// import { reactI18nextModule } from "react-i18next";

const storedLang = Cookies.get("lang") || "en";

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: "cookie",
  lookup(options) {
    return Cookies.get("lang");
  },
});

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .use(detector)
  .use(backend)
  .use(languageDetector)
  .init({
    resources,
    debug: true,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
    preload: ["en", "ar"],
  });

export default i18n;
