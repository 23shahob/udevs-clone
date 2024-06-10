import React from "react";
import Hero from "../components/Hero";
import Direction from "./Direction";
import Command from "./Command";
import Services from "./Services";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero />
      <Direction />
      <Command />
      <Services />
      <Tools />
    </div>
  );
};

export default Home;
