"use client";
import { useRef } from "react";


const HamBurger = () => {
  const hamburger = useRef<null | HTMLButtonElement>(null);

  function handleClick(): void {
    const secNavMenu = document.querySelector('.navbar__secondary-menu') as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;
    hamburger.current?.classList.toggle("hamburger--active");
    secNavMenu.classList.toggle("navbar__secondary-menu--active");

    if (secNavMenu.classList.contains("navbar__secondary-menu--active")) {
      body.style.overflow = "hidden";      
    } else {
      body.style.overflow = "auto";
    }
  }
  return (
    <button
      onClick={handleClick}
      ref={hamburger}
      className="hamburger block tablet:hidden z-20"
    >
      <div></div>
      <div></div>
    </button>
  );
};

export default HamBurger;
