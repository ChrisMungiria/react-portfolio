import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CustomLink = React.forwardRef(
  ({ link, label, onClick, activeLink }, ref) => {
    // Check if the link is active
    const isActive = activeLink === link;

    return (
      <Link
        to={link}
        smooth
        onClick={onClick}
        className={`${
          isActive ? "text-background font-bold" : "text-white"
        } px-[20px]  h-full flex items-center justify-center m-1 rounded-full`}
        ref={ref}
      >
        {label}
      </Link>
    );
  }
);

export default CustomLink;
