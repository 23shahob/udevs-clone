import React from "react";
import Bgpc from "../assets/images/bgpc.png";
import Laptop from "../assets/images/laptop.png";
import Architect from "../assets/images/architect.svg";
import Autotest from "../assets/images/autotest.svg";
import Stress from "../assets/images/stress.svg";
import Load from "../assets/images/load.svg";
import Devops from "../assets/images/devops.svg";
import Cloud from "../assets/images/cloud.svg";
import CI from "../assets/images/ci.svg";

const Optimization = () => {
  return (
    <div id="service4" className="bg-[#F4F7FF]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="mb-10 text-[64px] font-semibold leading-[64px] text-[#1b5bf7]">
          Optimization <br /> Infrastructure
        </h1>
        <div className="flex items-center justify-between">
          <div className="relative">
            <img
              className="h-[426px] w-[500px]"
              src={Bgpc}
              alt="Laptop Bg Img"
            />
            <img className="absolute top-12" src={Laptop} alt="Laptop Img" />
          </div>
          <div className="max-w-[500px]">
            <p className="mb-7 text-2xl font-medium leading-10 text-[#18191f]">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Architect} alt="Architect Logo" />
                <p className="text-lg font-semibold leading-[30px]">
                  Architecture
                </p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Autotest} alt="Autotesting Logo" />
                <p className="text-lg font-semibold leading-[30px]">
                  Auto testing
                </p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Stress} alt="Stresstesting Logo" />
                <p className="text-lg font-semibold leading-[30px]">
                  Stress testing
                </p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Load} alt="Load Logo" />
                <p className="text-lg font-semibold leading-[30px]">
                  Load testing
                </p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Devops} alt="Devops Logo" />
                <p className="text-lg font-semibold leading-[30px]">Devops</p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={Cloud} alt="Cloud Logo" />
                <p className="text-lg font-semibold leading-[30px]">Cloud</p>
              </div>
              <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
                <img src={CI} alt="CI/Cd Logo" />
                <p className="text-lg font-semibold leading-[30px]">CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimization;
