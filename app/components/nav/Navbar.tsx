import React from "react";
import { useTranslation } from "react-i18next";

import LangSwitcher from "./LangSwitcher";
import NavList from "./NavList";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import BackBtn from "./BackBtn";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <div
      className="relative flex justify-between items-center gap-2 px-6 py-2"
      dir="ltr"
    >
      <div className="flex gap-2 justify-between items-center">
        <BackBtn />
        <Link to="/">
          <img src="/logo.svg" width={36} height={36} />
        </Link>
      </div>
      <NavList />
      <div className="flex gap-2 justify-between items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
