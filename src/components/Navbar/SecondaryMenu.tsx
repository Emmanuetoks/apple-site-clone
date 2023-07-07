"use client";

import React, {
  BaseSyntheticEvent,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Menu from "./Menu";

const SecondaryMenu = ({
  views,
}: {
  views: MutableRefObject<HTMLDivElement[]>;
}) => {
  const [sublink, setSublink] = useState("");
  const currSlide = useRef(1);
  console.log(sublink);

  const handleClick = (e: BaseSyntheticEvent) => {
    const action = e.target.dataset.action;
    console.log(action);

    switch (action) {
      case "next":
        currSlide.current = -1;
        setSublink(e.target.dataset.targetMenu);
        views.current.forEach((view, i) => {
          if (view) {
            view.style.transform = `translateX(${
              (currSlide.current + i) * 100
            }%)`;
          }
        });
        break;
      case "back":
        currSlide.current = 0;
        console.log(currSlide.current);

        views.current.forEach((view, i) => {
          if (view) {
            view.style.transform = `translateX(${
              (currSlide.current + i) * 100
            }%)`;
          }
        });
        break;
      default:
        break;
    }
  };

  const possible = ['peer-hover/1:block', 'peer-hover/2:block', 'peer-hover/3:block', 'peer-hover/4:block', 'peer-hover/5:block']
  return (
    <div className="navbar__secondary-menu z-40 block tablet:hidden bg-black-100">
      <div className="wrapper w-full h-full relative">
        <div
          ref={(el: never) =>
            views.current.includes(el) || views.current.push(el)
          }
          className="links transition text-white-200 font-medium z-40 text-4xl pt-16 px-14"
        >
          <MainMenu handleClick={handleClick} />
        </div>

        <div
          ref={(el: never) =>
            views.current.includes(el) || views.current.push(el)
          }
          className="sublinks transition text-white-200 z-40 absolute inset-0 p-16 space-y-4 overflow-y-auto"
        >
          <Back handleClick={handleClick} />
          {sublink === "ipad" && <IPadMenu />}
          {sublink === "mac" && <MacMenu />}
          {sublink === "iphone" && <IPhoneMenu />}
          {sublink === "ipad" && <IPadMenu />}
          {sublink === "support" && <SupportMenu />}
          {sublink === "whereToBuy" && <WhereToBuyMenu />}
        </div>
      </div>
    </div>
  );
};

const Back = ({
  handleClick,
}: {
  handleClick: (e: BaseSyntheticEvent) => void;
}) => {
  return (
    <button
      data-action="back"
      onClick={handleClick}
      id="back"
      className="text-white-200 font-thin text-3xl absolute top-3 left-10"
    >
      {'<'}
    </button>
  );
};

const Next = ({
  id,
  handleClick,
  peerName,
}: {
  id: string;
  handleClick: (e: BaseSyntheticEvent) => void;
  peerName:string;
}) => {
  return (
    <button
      data-action="next"
      onClick={handleClick}
      data-target-menu={id}
      className={`text-white-200 hidden font-thin text-3xl peer-hover/${peerName}:block`}
    >
      {">"}
    </button>
  );
};

const MainMenu = ({
  handleClick,
}: {
  handleClick: (e: BaseSyntheticEvent) => void;
}) => {
  return (
    <ul className="space-y-6 w-full">
      <li className=" flex justify-between">
        <p data-action="next" data-target-menu='mac' onClick={handleClick} className="peer/1 flex-grow cursor-pointer">Mac</p>
        <Next id="mac" handleClick={handleClick} peerName="1"/>
      </li>
      <li className=" flex justify-between">
        <p data-action="next" data-target-menu='ipad' onClick={handleClick} className="flex-grow cursor-pointer peer/2">iPad</p>
        <Next id="ipad" handleClick={handleClick} peerName="2"/>
      </li>
      <li className=" flex justify-between">
        <p data-action="next" data-target-menu='iphone' onClick={handleClick} className="flex-grow cursor-pointer peer/3">iPhone</p>
        <Next id="iphone" handleClick={handleClick} peerName="3"/>
      </li>
      <li className=" flex justify-between">
        <p data-action="next" data-target-menu='support' onClick={handleClick} className="flex-grow cursor-pointer peer/4">Support</p>
        <Next id="support" handleClick={handleClick} peerName="4" />
      </li>
      <li className=" flex justify-between">
        <p data-action="next" data-target-menu='whereToBuy' onClick={handleClick} className="flex-grow cursor-pointer peer/5">Where to Buy</p>
        <Next id="whereToBuy" handleClick={handleClick} peerName="5"/>
      </li>
    </ul>
  );
};

const IPadMenu = () => {
  return (
    <div className="space-y-10">
      <ul className="space-y-3 text-4xl font-medium">
        <li>Explore All iPad</li>
        <li>iPad Pro</li>
        <li>iPad Air</li>
        <li>iPad</li>
        <li>iPad mini</li>
      </ul>

      <div className="text-xl">
        <h5 className="text-xl font-thin mb-3">More from iPad</h5>
        <li>iPad Support</li>
      </div>
    </div>
  );
};

const MacMenu = () => {
  return (
    <div className="space-y-10">
      <ul className="space-y-3 text-4xl font-medium">
        <li>Explore All Mac</li>
        <li>MacBook Air</li>
        <li>MacBook Pro</li>
        <li>iMac</li>
        <li>Mac Studio</li>
        <li>Mac Pro</li>
        <li>Displays</li>
      </ul>

      <div className="text-xl">
        <h5 className="text-xl font-thin mb-3">More from Mac</h5>
        <li>Mac Support</li>
      </div>
    </div>
  );
};

const IPhoneMenu = () => {
  return (
    <div className="space-y-10">
      <ul className="space-y-3 text-4xl font-medium">
        <li>Explore All iPhone</li>
        <li>iPhone 14 Pro</li>
        <li>iPhone 14</li>
        <li>iPhone 13</li>
        <li>iPhone 12</li>
        <li>iPhone SE</li>
      </ul>

      <div className="text-xl">
        <h5 className="text-xl font-thin mb-3">More from iPhone</h5>
        <li>iPhone Support</li>
      </div>
    </div>
  );
};

const WhereToBuyMenu = () => {
  return (
    <div>
      <ul className="space-y-3 text-4xl font-medium">
        <li>Authorized Resellers</li>
        <li>Service & Support</li>
      </ul>
      <h5 className="text-xl font-thin mt-8">Explore All Ways to Buy</h5>
    </div>
  );
};

const SupportMenu = () => {
  return (
    <div className="space-y-10">
      <ul className="space-y-3 text-4xl font-medium">
        <li>iPhone</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>Music</li>
        <li className="mt-3 text-xl font-semibold tracking-wide">
          Explore Support
        </li>
      </ul>

      <div>
        <h5 className="text-xl font-thin mb-3">Get Help</h5>
        <ul className="space-y-2">
          <li>Community</li>
          <li>Check Coverage</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h5 className="text-xl font-thin mb-3">Helpful Topics</h5>
        <ul className="space-y-2">
          <li>Apple ID & Password</li>
          <li>Billing & Subscriptions</li>
          <li>Finf My</li>
        </ul>
      </div>
    </div>
  );
};
export default SecondaryMenu;
