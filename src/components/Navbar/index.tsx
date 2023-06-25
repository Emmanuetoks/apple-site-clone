import HamBurger from "./HamBurger";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

interface Props {
  bgColor?: string;
}

const NavBar = ({ bgColor }: Props) => {
  return (
    <nav className={`${bgColor} navbar w-full flex justify-center px-8`}>
      <div className="wrapper flex mx-auto w-full justify-between desktop:w-[63rem] items-center">
        <Logo type="navbar__logo" styles="fill-white" />

        <Menu
          type="navbar__primary-menu flex-grow"
          styles="justify-between text-white-200 items-center"
        >
          <li>
            <a className="navlink">mac</a>
          </li>
          <li>
            <a href="" className="navlink">
              iPad
            </a>
          </li>
          <li>
            <a href="" className="navlink">
              iPhone
            </a>
          </li>
          <li>
            <a href="" className="navlink">
              Support
            </a>
          </li>
          <li>
            <a href="" className="navlink">
              Where to Buy
            </a>
          </li>
        </Menu>

        <div className="flex items-center gap-10">
          <Search styles="fill-white" />
          <HamBurger />
        </div>
        {/* <Menu type="navbar__secondary-menu" styles="block tablet:hidden">

        </Menu> */}
      </div>
    </nav>
  );
};

export default NavBar;
