"use client";
import { MutableRefObject, RefObject, useRef } from "react";

const HamBurger = ({
  views,
}: {
  views: MutableRefObject<HTMLDivElement[]>;
}) => {
  const hamburger = useRef<null | HTMLButtonElement>(null);

  function handleClick(): void {
    const secNavMenu = document.querySelector(
      ".navbar__secondary-menu"
    ) as HTMLDivElement;

    const body = document.querySelector("body") as HTMLBodyElement;

    hamburger.current?.classList.toggle("hamburger--active");


    secNavMenu.classList.toggle("navbar__secondary-menu--active");
    // secNavMenu.classList.toggle("navbar__secondary-menu--active");

    if (secNavMenu.classList.contains("navbar__secondary-menu--active")) {
      body.style.overflow = "hidden";      
    } else {
      body.style.overflow = "auto";
    }
    views.current.forEach((view, i) => {
      if (view) {
        view.style.transform = `translateX(${i * 100}%)`;
      }
    });
  }
  return (
    <button
      onClick={handleClick}
      ref={hamburger}
      className="hamburger block tablet:hidden z-50"
    >
      <div></div>
      <div></div>
    </button>
  );
};

export default HamBurger;
