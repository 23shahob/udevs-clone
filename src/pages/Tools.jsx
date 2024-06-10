import React from "react";
import AkfaMedline from "../assets/client_img/akfaMedline.svg";
import Cspace from "../assets/client_img/cspace.svg";
import Delever from "../assets/client_img/delever.svg";

const Tools = () => {
  return (
    <div className="bg-[#f4f7ff] py-20">
      <div className="">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
            Tools
          </h1>
        </div>
        <div>
          <div>
            <marquee behavior="" direction="left" className="mb-5">
              <img className="h-32 w-[213px]" src={AkfaMedline} alt="" />
            </marquee>
            <marquee behavior="" direction="right">
              <img className="h-32 w-[213px]" src={AkfaMedline} alt="" />
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
