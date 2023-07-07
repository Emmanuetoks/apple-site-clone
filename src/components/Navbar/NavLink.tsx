"use client";
import React, { BaseSyntheticEvent } from "react";
import SubMenu from "./SubMenu";

type Props = {
  linkName: string;
  children:React.ReactNode
};

const NavLink = ({ linkName, children }: Props) => {
  const handleMouseEnter = (e: BaseSyntheticEvent) => {
    document.querySelector('nav')?.classList.remove('bg-black-200')
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
            setTimeout(() => {
              submenu.classList.remove("fade-in", 'submenu--enter');  
            }, 300);
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
    <li className="h-full">
      <a onMouseEnter={handleMouseEnter} className="hover:text-gray-100 navlink" href="">
        {linkName}
      </a>
      {children}
    </li>
  );
};

export default NavLink;
