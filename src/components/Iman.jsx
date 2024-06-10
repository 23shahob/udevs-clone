import React from "react";
import ImanBg from "../assets/images/imanbg.png";
import ImanText from "../assets/images/iman.svg";
import Finance from "../assets/images/finance.svg";

import Website from "../assets/images/website.svg";
import AdminPanel from "../assets/images/adminpanel.svg";
import CrossPlatform from "../assets/images/crossplatform.svg";
import WebDesign from "../assets/images/webdesign.svg";
import MobileDesign from "../assets/images/mobile.svg";

const Iman = () => {
  return (
    <div id="portfolio4" className="py-20">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-4">
        <div className="w-[50%]">
          <img className="mb-8" src={ImanText} alt="Iman Text" />
          <span className="mb-8 flex w-[142px] items-center gap-2 rounded-full bg-[#CCF4EF] px-4 py-1">
            <img src={Finance} alt="Finance Img" />
            <p className="text-sm text-[#01CAB0]">Finance</p>
          </span>
          <p className="mb-8 text-xl font-semibold text-[#464359]">
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
          </p>
          <h3 className="mb-6 text-2xl font-semibold">What we did?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={Website} alt="Website" />
              <p className="text-lg font-semibold leading-[30px]">Website</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={AdminPanel} alt="Admin Panel" />
              <p className="text-lg font-semibold leading-[30px]">
                Admin panel
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={CrossPlatform} alt="CrossPlatform" />
              <p className="text-lg font-semibold leading-[30px]">
                Crossplatform
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={ImanBg} alt="ImanBg Img" />
        </div>
      </div>
    </div>
  );
};

export default Iman;
