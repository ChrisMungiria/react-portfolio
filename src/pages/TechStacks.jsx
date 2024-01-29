import React from "react";
import TechStacksComponent from "../components/TechStacksComponent";

const TechStacks = () => {
  return (
    <section className="w-screen h-full p-10 sm:p-28 bg-background">
      <h1 className="font-bold text-white md:text-6xl text-3xl">
        Tech Stacks <span className="text-Highlight">.</span>
      </h1>

      <TechStacksComponent />
    </section>
  );
};

export default TechStacks;
