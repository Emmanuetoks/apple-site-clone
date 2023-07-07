"use client";

import React, {
  BaseSyntheticEvent,
  MouseEventHandler,
  RefCallback,
  useRef,
} from "react";

type Props = {
  name: string;
  content?: string;
  refFunction: RefCallback<HTMLDivElement>;
  accorContents: HTMLDivElement[];
  contentID: string;
  children: React.ReactNode;
};

const AccordionItem = ({
  name,
  content,
  refFunction,
  accorContents,
  contentID,
  children,
}: Props) => {
  const accorButton = useRef<HTMLButtonElement>(null);
  const handleClick: MouseEventHandler = (e: BaseSyntheticEvent) => {
    const accorBtn: HTMLButtonElement = e.target.querySelector("button");
    accorBtn.classList.toggle("rotate");
    accorContents[Number(accorButton.current?.id)].classList.toggle(
      "accordion__content--hide"
    );
  };
  return (
    <div onClick={handleClick} className="accordion__item w-full bottom border-b-[1px] border-gray-300 py-3 cursor-pointer">
      <div className="accordion__name justify-between w-full flex text-black">
        <span>{name}</span>
        <button
          id={contentID}
          ref={accorButton}
          // onClick={handleClick}
          className="cursor-pointer"
        >
          <p className="w-7 aspect-square cursor-pointer">+</p>
        </button>
      </div>

      <div
        ref={refFunction}
        className="accordion__content w-full p-2 accordion__content--hide text-black"
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
