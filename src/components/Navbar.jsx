import CustomLink from "./CustomLink";
import { links } from "../lib/constants";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent flex items-center justify-between p-6 border border-green-500">
      <h1 className="text-xl text-white font-bold text-center">
        Christopher <br /> Mungiria
      </h1>
      <div className="border border-primary rounded-full">
        <ul className="flex gap-4 p-2">
          {links.map((link) => (
            <CustomLink key={link.href} link={link.href} label={link.name} />
          ))}
        </ul>
      </div>
      <div>download cv</div>
    </nav>
  );
};

export default Navbar;
