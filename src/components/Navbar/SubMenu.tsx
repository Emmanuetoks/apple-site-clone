"use client";
import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

const SubMenu = ({ children }: Props) => {
  const subMenu = useRef<HTMLUListElement | null>(null);
  const handleMouseLeave = () => {
    subMenu.current?.classList.remove("fade-in", 'submenu--enter');
    document.querySelector('body')?.classList.remove('blur-sections')
  };
  return (
    <ul
      ref={subMenu}
      onMouseLeave={handleMouseLeave}
      className="navbar__submenu absolute hidden left-0 right-0 top-full z-30 bg-black"
    >
      {children}
    </ul>
  );
};

export default SubMenu;