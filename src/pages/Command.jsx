import React from "react";
import Hundred from "../assets/images/100.svg";
import Counter from "../components/Counter";

const Command = () => {
  return (
    <div id="command" className="bg-[#F4F7FF]">
      <div className="mx-auto px-4 max-w-6xl py-20">
        <div className="flex w-full items-center justify-between">
          <div className="w-[45%]">
            <h1 className="mb-10 text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]">
              Team
            </h1>
            <p className="mb-7 text-xl font-medium leading-10 text-[#464359]">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <Counter end={100} duration={3000} />
            <p className="text-[40px] font-extrabold leading-[72px] text-[#464359]">
              Dedicated team
            </p>
          </div>
          <div>
            <img src={Hundred} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
