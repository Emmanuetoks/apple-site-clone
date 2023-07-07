"use client";

import { useRef } from "react";
type Props = {
  styles?: string;
};

const Search = ({ styles }: Props) => {
  const subMenu = useRef<HTMLDivElement | null>(null);

  const handleMobSearchMenu = () => {
    const secSearchMenu = document.querySelector(
      ".navbar__secondary-search-menu"
    ) as HTMLDivElement;

    secSearchMenu.classList.add("navbar__secondary-menu--active");
    const body = document.querySelector("body") as HTMLBodyElement;
    if (secSearchMenu.classList.contains("navbar__secondary-menu--active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  const handleSubMenu = () => {
    const nav = document.querySelector("nav");

     nav?.classList.remove("bg-black-200")

    document
      .querySelectorAll(".navlink + .navbar__submenu")
      .forEach((submenu: Element) => {
        submenu.classList.remove("fade-in", "submenu--enter");
      });
    subMenu.current?.classList.add("fade-in");
    subMenu.current?.classList.add("submenu--enter");
    if (subMenu.current?.classList.contains("submenu--enter")) {
      document.querySelector("body")?.classList.add("blur-sections");
    } else {
      document.querySelector("body")?.classList.remove("blur-sections");
    }
  };
  return (
    <div className="navbar__search flex items-center">
      <button onClick={handleSubMenu}>
        <span className="normal hidden tablet:block">
          <svg
            className={`${styles}`}
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="44px"
            viewBox="0 0 15 44"
          >
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
        </span>
      </button>

      <button onClick={handleMobSearchMenu} className="cursor-pointer z-[30]">
        <span className="compact block tablet:hidden">
          <svg
            className={styles}
            height="48"
            viewBox="0 0 17 48"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path>
          </svg>
        </span>
      </button>
      <div
        ref={subMenu}
        className="navbar__submenu hidden absolute left-0 right-0 top-[100%] shadow-none z-30 bg-black-100 tablet:flex text-white-100"
      >
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-4 bg-inherit text-2xl border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
