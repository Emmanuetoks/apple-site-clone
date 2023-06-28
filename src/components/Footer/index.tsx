import React from "react";
import FooterLinks from "./FooterLinks";
import Accordion from "./Accordion";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="footer w-full bg-white-200 flex flex-col items-center py-8">
      <Wrapper>
        <div className="flex w-full tablet:gap-[7rem]">
          <FooterLinks />
          <Accordion />
        </div>
        <div className="footer__other-info w-full space-y-2">
          <div>
            <p>
              <a className="text-blue-200 underline mr-2" href="">Find a retailer</a>
              <span className="text-gray-100">near you</span>
            </p>
          </div>

          <div className="flex justify-between w-full flex-col-reverse desktop:w-80% desktop:flex-row border-gray-300 desktop:border-t-[1px] gap-2 pt-1">
            <div>
              <div className="desktop:space-x-4">
                <span className="text-gray-100">
                  <p className="inline">Copywright {String.fromCharCode(parseInt('A9', 16))} 2023</p>
                  <p className="inline">Apple Inc</p>
                  <p className="inline">All rights reserved</p>
                </span>
                <span className="block desktop:inline">
                  <p className="inline">Terms of use | site map</p>
                </span>
              </div>
            </div>

            <span>Nigeria</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
