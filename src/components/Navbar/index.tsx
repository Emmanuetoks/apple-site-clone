import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

interface Props {
  bgColor: string;
}

const NavBar = ({ bgColor = "bg-blue" }: Props) => {
  return (
    <nav className={`${bgColor} navbar w-full py-5`}>
      <div className="wrapper mx-auto grid w-[95%] desktop:w-[80%] tablet:gap-[10%]">

        <Logo type="navbar__logo" />

        <Menu type="navbar__primary-menu" styles="justify-between">
          <li>Mac</li>
          <li>Ipad</li>
          <li>Iphone</li>
          <li>Support</li>
          <li>Where to buy</li>
        </Menu>

        <Search />

        {/* <Menu type="navbar__secondary-menu" styles="block tablet:hidden">

        </Menu> */}
      </div>
    </nav>
  );
};

export default NavBar;
