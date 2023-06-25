"use client";
import { useRef } from "react";

type Props =   {
  secNavMenu?: string;
}

const HamBurger = ({secNavMenu}:Props) => {
  const hamburger = useRef<null | HTMLButtonElement>(null);

  function handleClick(): void {
    hamburger.current?.classList.toggle("hamburger--active");
  }
  return (
    <button
      onClick={handleClick}
      ref={hamburger}
      className="hamburger block tablet:hidden"
    >
      <div></div>
      <div></div>
    </button>
  );
};

export default HamBurger;
