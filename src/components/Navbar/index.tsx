import HamBurger from "./HamBurger";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import SubMenu from "./SubMenu";
import NavLink from "./NavLink";

interface Props {
  bgColor?: string;
}

const NavBar = ({ bgColor }: Props) => {
  return (
    <nav
      className={`${bgColor} navbar w-full flex justify-center px-8 relative`}
    >
      <div className="wrapper flex mx-auto w-full justify-between desktop:w-[63rem] items-center">
        <Logo type="navbar__logo" styles="fill-white" />

        <Menu
          type="navbar__primary-menu flex-grow"
          styles="justify-between text-white-200 items-center"
        >
          <NavLink linkName="Mac" />
          <NavLink linkName="iPad" />
          <NavLink linkName="iPhone" />
          <NavLink linkName="Support" />
          <NavLink linkName="Where To Buy" />
        </Menu>

        <Menu type="navbar__secondary-menu z-20" styles="block tablet:hidden">
          <a href=""></a>
        </Menu>
        <div className="flex items-center gap-10">
          <Search styles="fill-white" />
          <HamBurger />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
