import React from "react";
import TextCarousel from "../components/TextCarousel";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-background flex items-center justify-center">
      {/* Background from 'https://bg.ibelick.com/' */}
      <div class="relative h-full w-full bg-transparent z-0">
        <div class="absolute h-full w-full bg-[radial-gradient(#ABC241_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex border border-red-500 ">
        <div className="flex-[3] px-12 flex flex-col justify-center">
          <h1 className="text-6xl text-primary font-bold">
            Hi I'm{" "}
            <span className="block text-Highlight">Christopher Mungiria</span>
          </h1>
          <TextCarousel />
        </div>
        <div className="flex-1 bg-red-500 px-12"></div>
      </div>
    </section>
  );
};

export default Hero;
