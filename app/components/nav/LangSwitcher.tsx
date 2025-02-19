import { Globe } from "lucide-react";
import useLanguage from "~/hooks/useLanguage";

const LangSwitcher = () => {
  const { lang, changeLanguage } = useLanguage();

  return (
    <button
      className="flex items-center gap-2 p-1.5 border-primary hover:border-primary/90 border-2 cursor-pointer rounded-primary group text-sm"
      onClick={() => changeLanguage(lang === "ar" ? "en" : "ar")}
    >
      <span className="font-semibold group-hover:text-foreground/90">
        {lang === "ar" ? "EN" : "عر"}
      </span>
      <Globe className="text-primary group-hover:text-primary/90" />
    </button>
  );
};

export default LangSwitcher;
