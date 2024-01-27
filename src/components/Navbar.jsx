import React, { useRef, useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import { links } from "../lib/constants";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(links[0].href); // default to the first link
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
    const left = linkRefs.current[link].current.offsetLeft;
    return left;
  };

  const calculateWidth = (link) => {
    return linkRefs.current[link].current.offsetWidth;
  };
  return (
    <nav className="fixed w-full bg-transparent flex items-center justify-between p-6 border border-green-500">
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
      <div>download cv</div>
    </nav>
  );
};

export default Navbar;
