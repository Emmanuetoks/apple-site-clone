'use client'

import React, { MouseEventHandler, RefCallback, useRef } from "react";

type Props = {
  name: string;
  content: string;
  refFunction: RefCallback<HTMLDivElement>;
  accorContents: HTMLDivElement[];
  contentID : string;
};

const AccordionItem = ({ name, content, refFunction, accorContents, contentID }: Props) => {
    const accorButton = useRef<null | HTMLButtonElement>(null)
    const handleClick:MouseEventHandler = () => {
        accorContents[Number(accorButton.current?.id)].classList.toggle('accordion__content--hide')
    }
  return (
    <div className="accordion__item w-full bottom border-b-[1px] border-gray-300 py-3">
      <div className="accordion__name justify-between w-full flex">
        <span>{name}</span>
        <button id={contentID} ref={accorButton} onClick={handleClick}>
          <span>+</span>
        </button>
      </div>

      <div ref={refFunction} className="accordion__content accordion__content--hide">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
