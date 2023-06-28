"use client";
import React, { BaseSyntheticEvent } from "react";
import SubMenu from "./SubMenu";

type Props = {
  linkName: string;
};

const NavLink = ({ linkName }: Props) => {
  const handleMouseEnter = (e: BaseSyntheticEvent) => {
    let oneHas = false;
    document
      .querySelectorAll(".navbar__submenu")
      .forEach((submenu: Element) => {
        if (submenu.classList.contains("submenu--enter")) {
          oneHas = true;
        } else {
          return;
        }
      });

    if (oneHas) {
      document
        .querySelectorAll(".navbar__submenu")
        .forEach((submenu: Element) => {
          if (!(submenu === e.target.nextSibling)) {
            submenu.classList.remove("fade-in", 'submenu--enter');
          } else {
            submenu.classList.add("fade-in", 'submenu--enter');
          }
        });
    } else {
      e.target.nextSibling.classList.add("fade-in", "submenu--enter");
      document.querySelector('body')?.classList.add('blur-sections')
    }
  };

  return (
    <li className="h-full navlink">
      <a onMouseEnter={handleMouseEnter} href="">
        {linkName}
      </a>
      <SubMenu>
        <div className="text-white-200">{linkName}</div>
      </SubMenu>
    </li>
  );
};

export default NavLink;
