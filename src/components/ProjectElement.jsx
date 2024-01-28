import { HashLink as Link } from "react-router-hash-link";

const ProjectElement = ({ project }) => {
  console.log(project);
  return (
    <Link
      to={project?.link}
      className="w-[300px] h-[250px] p-2 border rounded-xl border-Highlight transition duration-500 ease-in-out transform hover:shadow-outline-glow"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={project.image}
          alt={project.name}
          className="mx-auto  w-[200px] h-[150px] object-contain"
        />
        <h1 className="text-white text-xl font-bold text-start w-full px-5">
          {project.name}
        </h1>
        <div className="flex gap-3 p-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-white text-xs font-medium border border-Highlight rounded-3xl px-2 py-1 text-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectElement;
