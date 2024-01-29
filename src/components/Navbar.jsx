import React, { useRef, useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import { links } from "../lib/constants";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(links[0].href); // default to the first link
  const [isAtTop, setIsAtTop] = useState(true);
  const linkRefs = useRef(
    links.reduce(
      (acc, link) => ({ ...acc, [link.href]: React.createRef() }),
      {}
    )
  );

  useEffect(() => {
    // force a re-render when the widths change
    setActiveLink(activeLink);
  }, [linkRefs.current]);

  const calculatePosition = (link) => {
    if (linkRefs.current[link].current) {
      const left = linkRefs.current[link].current.offsetLeft;
      return left;
    }
    return 0;
  };

  const calculateWidth = (link) => {
    if (linkRefs.current[link].current) {
      return linkRefs.current[link].current.offsetWidth;
    }
    return 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, []);
  return (
    <nav
      className={`fixed w-full bg-transparent flex items-center justify-between p-6 z-30
      ${!isAtTop && "bg-primary backdrop-filter backdrop-blur-md"}
      `}
    >
      <Link
        to="#home"
        smooth
        className="text-center text-xl font-bold text-white"
      >
        Christopher <br /> Mungiria
      </Link>
      <div className="flex items-center justify-between border border-primary h-[60px] rounded-full p-[5px] relative">
        <div
          className="h-4/5 absolute transition-all duration-300 bg-primary rounded-full z-[-1]"
          style={{
            left: calculatePosition(activeLink),
            width: calculateWidth(activeLink),
          }}
        ></div>
        {links.map((link) => (
          <CustomLink
            ref={linkRefs.current[link.href]}
            key={link.href}
            link={link.href}
            label={link.name}
            onClick={() => setActiveLink(link.href)}
            activeLink={activeLink}
          />
        ))}
      </div>
      <Link className="border border-white rounded-full h-[60px] flex items-center justify-center px-8 text-xs text-white hover:underline">
        Download CV
      </Link>
    </nav>
  );
};

export default Navbar;
