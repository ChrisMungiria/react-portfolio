import React from "react";
import AboutImage from "../components/AboutImage";
import { HashLink as Link } from "react-router-hash-link";
import { BsChevronDoubleDown } from "react-icons/bs";

const About = () => {
  return (
    <section className="w-screen h-screen bg-background p-28 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold text-white">
          A little <span className="text-Highlight">about me</span>
        </h1>
        <AboutImage />
      </div>
      <p className="text-white text-lg w-2/3">
        I started developing web pages in{" "}
        <span className="text-Highlight">HTML, CSS</span> and{" "}
        <span className="text-Highlight">JavaScript</span>, I then moved on to a
        more modular approach using{" "}
        <span className="text-Highlight">ReactJS</span> with{" "}
        <span className="text-Highlight">NextJS</span>. I am currently working
        on completing the <span className="text-Highlight">MERN stack</span>{" "}
        allowing me to create full stack web apps. From this knowledge, I also
        started mobile development in{" "}
        <span className="text-Highlight">React Native</span>, using a lot of the
        web concepts in this.
      </p>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Link
          className="flex flex-col items-center justify-center text-Highlight animate-bounce"
          to="#stacks"
          smooth
        >
          <p>My Tech Stacks</p>
          <BsChevronDoubleDown />
        </Link>
      </div>
    </section>
  );
};

export default About;
