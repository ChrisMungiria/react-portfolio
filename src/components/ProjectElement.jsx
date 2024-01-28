import { HashLink as Link } from "react-router-hash-link";
const ProjectElement = () => {
  return (
    <Link className="w-full h-32 border rounded-md border-Highlight max-w-xs transition duration-500 ease-in-out transform hover:shadow-outline-glow">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-2xl font-bold">Project Name</h1>
        <p className="text-white text-sm">Project Description</p>
      </div>
    </Link>
  );
};

export default ProjectElement;
