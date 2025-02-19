import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import NavItem from "./NavItem";
import useLanguage from "~/hooks/useLanguage";

interface NavItemsProps {}

export type ItemType = {
  id: number;
  label: string;
  link: string;
  type: "link" | "list";
  child?: ItemType[];
};

type NavList = ItemType[];

const NavList: FC<NavItemsProps> = ({}) => {
  const { t } = useTranslation("navbar");

  const navItems: NavList = [
    { id: 1, label: t("home"), link: "/", type: "link" },
    { id: 2, label: t("applications"), link: "/applications", type: "link" },
    { id: 3, label: t("tasks"), link: "/tasks", type: "link" },
    {
      id: 4,
      label: t("newReq"),
      link: "#",
      type: "list",
      child: [
        {
          id: 1,
          label: t("newSfda"),
          link: "/new-certificate/sfda",
          type: "link",
        },
      ],
    },
  ];

  return (
    <NavigationMenu className="absolute inset-0 m-auto">
      <NavigationMenuList>
        {navItems.map((item: ItemType) => (
          <NavItem item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavList;
