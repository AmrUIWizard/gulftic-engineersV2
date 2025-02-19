import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export type LangType = "ar" | "en";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const lang: LangType = i18n.language as LangType;

  const changeLanguage = (newLang: LangType) => {
    if (lang === newLang) return;
    i18n.changeLanguage(newLang);
    Cookies.set("lang", newLang, { expires: 365 });

    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return { lang, changeLanguage };
};

export default useLanguage;
