"use client";
import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

const SubMenu = ({ children }: Props) => {
  const subMenu = useRef<HTMLDivElement | null>(null);

  return (
      <div
        ref={subMenu}
        // onMouseOut={handleMouseLeave}
        className="navbar__submenu absolute left-0 right-0 top-[100%] shadow-none bg-black-100 flex text-white-100 gap-16 px-[10rem]"
      >
        {children}
      </div>
  );
};

export default SubMenu;
