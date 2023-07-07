"use client";

import HamBurger from "./HamBurger";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import SubMenu from "./SubMenu";
import NavLink from "./NavLink";
import SecondaryMenu from "./SecondaryMenu";
import { useRef } from "react";
import SearchMenu from "./SecSearchMenu";

interface Props {
  bgColor?: string;
}

const NavBar = ({ bgColor }: Props) => {
  const views = useRef<HTMLDivElement[] | never[]>([]);
  const possible = ['bg-black-100']
  return (
    <nav
      className={`bg-black-100 ${bgColor} navbar w-full flex justify-center px-8 fixed z-20`}
    >
      <div className="wrapper flex mx-auto w-full justify-between desktop:w-[63rem] items-center">
        <Logo type="navbar__logo" styles="fill-white" />

        <Menu
          type="navbar__primary-menu flex-grow"
          styles="justify-between text-white-200 items-center"
        >
          <NavLink linkName="Mac">
            <SubMenu>
              <div className="space-y-10">
                <div>
                  <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Explore Mac</h5>
                  <ul className="space-y-3 text-2xl font-medium">
                    <li>Explore All Mac</li>
                    <li>MacBook Air</li>
                    <li>MacBook Pro</li>
                    <li>iMac</li>
                    <li>Mac Studio</li>
                    <li>Mac Pro</li>
                    <li>Displays</li>
                  </ul>
                </div>
              </div>

              <div className="text-xl">
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">More from Mac</h5>
                <p>Mac Support</p>
              </div>
            </SubMenu>
          </NavLink>
          <NavLink linkName="iPad">
            <SubMenu>
              <div>
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Explore All iPad</h5>

                <ul className="space-y-3 text-2xl font-medium">
                  <li>Explore All iPad</li>
                  <li>iPad Pro</li>
                  <li>iPad Air</li>
                  <li>iPad</li>
                  <li>iPad mini</li>
                </ul>
              </div>

              <div className="text-xl">
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">More from iPad</h5>
                <p>iPad Support</p>
              </div>
            </SubMenu>
          </NavLink>
          <NavLink linkName="iPhone">
            <SubMenu>
              <div>
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Explore iPhone</h5>

                <ul className="space-y-3 text-2xl font-medium">
                  <li>Explore All iPhone</li>
                  <li>iPhone 14 Pro</li>
                  <li>iPhone 14</li>
                  <li>iPhone 13</li>
                  <li>iPhone 12</li>
                  <li>iPhone SE</li>
                </ul>
              </div>

              <div className="text-xl">
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">More from iPhone</h5>
                <p>iPhone Support</p>
              </div>
            </SubMenu>
          </NavLink>
          <NavLink linkName="Support">
            <SubMenu>
              <div>
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Get Help</h5>
                <ul className="space-y-2">
                  <li>Community</li>
                  <li>Check Coverage</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div>
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Helpful Topics</h5>
                <ul className="space-y-2">
                  <li>Apple ID & Password</li>
                  <li>Billing & Subscriptions</li>
                  <li>Find My</li>
                </ul>
              </div>
            </SubMenu>
          </NavLink>
          <NavLink linkName="Where To Buy">
            <SubMenu>
              <div>
                <h5 className=" text-sm tracking-wider text-gray-100 font-thin mb-3">Explore</h5>
                <ul className="space-y-3 text-2xl font-medium">
                  <li>Authorized Resellers</li>
                  <li>Service & Support</li>
                </ul>
                <h5 className="text-sm font-bold mt-8 tracking-wider">
                  Explore All Ways to Buy
                </h5>
              </div>
            </SubMenu>
          </NavLink>
        </Menu>
        <SecondaryMenu views={views} />
        <SearchMenu />
        <div className="flex items-center gap-10">
          <Search styles="fill-white" />
          <HamBurger views={views} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
