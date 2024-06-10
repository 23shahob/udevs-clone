import React from "react";
import Hero from "../components/Hero";
import Direction from "./Direction";
import Command from "./Command";
import Services from "./Services";
import Portfolio from "./Portfolio";
import HowWeWork from "../components/HowWeWork";
import Contact from "../components/Contact";
import Clients from "./Clients";

const Home = () => {
  return (
    <div>
      <Hero />
      <Direction />
      <Command />
      <Services />
      <Clients />
      <Portfolio />
      <HowWeWork />
      <Contact />
    </div>
  );
};

export default Home;
