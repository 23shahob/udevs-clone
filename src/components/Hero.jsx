import React from "react";
import HeroImg from "../assets/images/hero.svg";
import Logo from "../assets/images/logo.svg";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const texts = [
    "Development of mobile applications",
    "Development and implementation ERP systems",
    "User interface, user experience and design",
    "Optimization IT consulting insfrastructure",
  ];

  return (
    <div className="mx-auto mb-20 px-4 flex max-w-6xl justify-between pt-36">
      <div className="flex w-full items-center justify-between">
        <div className="w-[45%]">
          <img className="mb-6" src={Logo} alt="Site Logo" />
          <p className="mb-5 text-[40px] font-extrabold leading-[54px] text-[#464359]">
            IT-Outsourcing Company
          </p>
          <p className="mb-6 text-[40px] font-extrabold leading-[54px] text-[#1b5bf7]">
            <TypingEffect texts={texts} />
          </p>
          <button className="mb-4 h-14 w-60 rounded-lg bg-[#1b5bf7] text-xl font-semibold leading-[30px] text-white transition duration-300 hover:scale-[1.1]">
            Contact
          </button>
        </div>
        <div>
          <img src={HeroImg} alt="Hero Img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
