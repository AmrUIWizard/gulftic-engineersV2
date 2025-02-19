import React, { type FC } from "react";
import type { ItemType } from "./NavList";
import { Link } from "react-router";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

interface NavItemProps {
  item: ItemType;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  return (
    <NavigationMenuItem className="relative" key={item.id}>
      {item.type === "link" ? (
        <Link to={item.link}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.label}
          </NavigationMenuLink>
        </Link>
      ) : (
        <>
          <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[130px] p-2">
              {item.child &&
                item.child.map((item: ItemType) => (
                  <Link to={item.link}>
                    <NavigationMenuLink key={item.id}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                ))}
            </ul>
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  );
};

export default NavItem;
