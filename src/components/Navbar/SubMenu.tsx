"use client";
import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

const SubMenu = ({ children }: Props) => {
  const subMenu = useRef<HTMLDivElement | null>(null);
  const handleMouseLeave = () => {
    subMenu.current?.classList.remove("fade-in", "submenu--enter");
    document.querySelector('nav')?.classList.add('bg-black-200')

    document.querySelector("body")?.classList.remove("blur-sections");
  };
  return (
      <div
        ref={subMenu}
        onMouseLeave={handleMouseLeave}
        className="navbar__submenu absolute left-0 right-0 top-[100%] shadow-none z-30 bg-black-100 flex text-white-100 gap-16 px-[10rem]"
      >
        {children}
      </div>
  );
};

export default SubMenu;
