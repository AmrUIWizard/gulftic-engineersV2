import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translations";
import Cookies from "js-cookie";

const storedLang = Cookies.get("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
