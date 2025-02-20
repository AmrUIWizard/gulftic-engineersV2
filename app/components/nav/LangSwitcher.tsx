import { Globe } from "lucide-react";
import useLanguage from "~/hooks/useLanguage";

const LangSwitcher = () => {
  const { lang, changeLanguage } = useLanguage();

  return (
    <button
      className="flex items-center gap-1 p-1 border-primary hover:border-primary/90 border-2 cursor-pointer rounded-primary group text-xs"
      onClick={() => changeLanguage(lang === "ar" ? "en" : "ar")}
    >
      <span className="font-semibold group-hover:text-foreground/90">
        {lang === "ar" ? "EN" : "عر"}
      </span>
      <Globe size={20} className="text-primary group-hover:text-primary/90" />
    </button>
  );
};

export default LangSwitcher;
