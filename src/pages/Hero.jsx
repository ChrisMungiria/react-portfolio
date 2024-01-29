import React from "react";
import TextCarousel from "../components/TextCarousel";
import { HashLink as Link } from "react-router-hash-link";
import HeroImage from "../components/HeroImage";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-background flex items-center justify-center">
      {/* Background from 'https://bg.ibelick.com/' */}
      <div class="relative h-full w-full bg-transparent z-0">
        <div class="absolute h-full w-full bg-[radial-gradient(#ABC241_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col-reverse md:flex-row">
        <div className="flex-[3] px-12 flex flex-col justify-center">
          <h1 className="md:text-5xl text-3xl text-primary font-bold text-center md:text-start">
            Hi I'm{" "}
            <span className="block text-Highlight">Christopher Mungiria</span>
          </h1>
          <TextCarousel />
          <div className="flex gap-4 ">
            <Link
              smooth
              to="#contact"
              className="bg-primary text-background px-10 rounded-lg text-xs py-3"
            >
              Get in touch
            </Link>
            <Link
              smooth
              to="#projects"
              className="bg-Highlight text-background px-10 rounded-lg text-xs py-3"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-12 py-16 sm:py-0">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
