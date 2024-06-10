import React from "react";
import Contact from "../assets/images/contact.svg";
import Analysis from "../assets/images/analysis.svg";
import Offer from "../assets/images/offer.svg";
import Team from "../assets/images/team.svg";
import Start from "../assets/images/start.svg";

const HowWeWork = () => {
  return (
    <div className="py-20">
      <div className="px-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
            How we work!
          </h1>
        </div>
        <div className="mx-14 flex gap-10">
          <div className="flex flex-col items-center justify-center">
            <img className="h-20 w-20" src={Contact} alt="Contact" />
            <span className="text-xl font-bold leading-7">Contact</span>
            <p className="font-normal text-center leading-[26px]">
              Send us your project request or project idea.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-20 w-20" src={Analysis} alt="Analysis" />
            <span className="text-xl font-bold leading-7">Analysis</span>
            <p className="font-normal text-center leading-[26px]">
              We will contact you to clarify your project requirements.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-20 w-20" src={Offer} alt="Offer" />
            <span className="text-xl font-bold leading-7">Offer</span>
            <p className="font-normal text-center leading-[26px]">
              We will provide you with our free, non-binding appliction.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-20 w-20" src={Team} alt="Team" />
            <span className="text-xl font-bold leading-7">Team</span>
            <p className="font-normal text-center leading-[26px]">
              We provide a team for your requirements.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-20 w-20" src={Start} alt="Start" />
            <span className="text-xl font-bold leading-7">Start</span>
            <p className="font-normal text-center leading-[26px]">
              You will get to know the team and we'll get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
