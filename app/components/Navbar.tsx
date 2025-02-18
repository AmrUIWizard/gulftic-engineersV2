import React from "react";
import { useTranslation } from "react-i18next";
import Items from "./Items";
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <div>
      {t("welcome")}

      <br />
      <LangSwitcher />
      {/* <p dangerouslySetInnerHTML={{ __html: t("bold") }} /> */}

      {/* <Items /> */}
    </div>
  );
};

export default Navbar;
