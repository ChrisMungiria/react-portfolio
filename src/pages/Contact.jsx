import { CiMail, CiLinkedin } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  return (
    <section className="w-screen h-screen p-28 bg-background">
      <h1 className="text-4xl font-bold text-white">
        Some ways you can <span className="text-Highlight">talk to me...</span>
      </h1>
      <div className="flex items-center justify-center gap-5 flex-wrap mt-10">
        <Link
          to="mailto:mungiria01@gmail.com"
          className="w-1/3 h-20 flex items-center"
        >
          <CiMail size={40} className="text-Highlight" />
          <p className="text-white text-xl ml-5">mungiria01@gmail.com</p>
        </Link>
        <Link
          to="https://www.linkedin.com/in/christopher-mungiria/"
          className="w-1/3 h-20 flex items-center"
        >
          <CiLinkedin size={40} className="text-Highlight" />
          <p className="text-white text-xl ml-5">Christopher Mungiria</p>
        </Link>
        <Link to="tel:+254705332395" className="w-1/3 h-20 flex items-center">
          <FaPhoneVolume size={40} className="text-Highlight" />
          <p className="text-white text-xl ml-5">+254 705 332 395</p>
        </Link>
        <Link to="tel:+254705332395" className="w-1/3 h-20 flex items-center">
          <FaGithub size={40} className="text-Highlight" />
          <p className="text-white text-xl ml-5">ChrisMungiria</p>
        </Link>
      </div>
      <div className="max-w-lg w-10/12 flex flex-col gap-3 mx-auto">
        <input
          type="text"
          placeholder="Your name"
          className="p-4 bg-transparent border-b border-Highlight focus:outline-none text-white"
        />
        <input
          type="email"
          placeholder="Your email"
          className="p-4 bg-transparent border-b border-Highlight focus:outline-none text-white"
        />
        <textarea
          placeholder="Your Message..."
          className="p-4 h-fit bg-transparent border-b border-Highlight focus:outline-none text-white"
          cols="30"
          rows="5"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="bg-Highlight w-fit px-14 py-4 rounded-2xl mx-auto text-xs"
        />
      </div>
    </section>
  );
};

export default Contact;
