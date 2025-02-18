// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";
import resources from "./translations";

const storedLang = Cookies.get("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  preload: ["en", "ar"],
});

export default i18n;
