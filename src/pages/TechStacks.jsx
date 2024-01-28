import React from "react";
import TechStacksComponent from "../components/TechStacksComponent";

const TechStacks = () => {
  return (
    <section className="w-screen h-screen p-28 bg-background">
      <h1 className="font-bold text-white text-6xl">
        Tech Stacks <span className="text-Highlight">.</span>
      </h1>

      <TechStacksComponent />
    </section>
  );
};

export default TechStacks;
