import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    Cookies.set("lang", lang, { expires: 365 });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-2 rounded ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={`px-4 py-2 rounded ${
          i18n.language === "ar" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        AR
      </button>
    </div>
  );
};

export default LangSwitcher;
