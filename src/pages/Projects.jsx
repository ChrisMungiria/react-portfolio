import { useState } from "react";
import CustumButton from "../components/CustumButton";
import ProjectElement from "../components/ProjectElement";
import { projects } from "../lib/constants";

const Projects = () => {
  const [selected, setSelected] = useState("All");
  return (
    <section className="w-screen h-fit bg-background relative">
      {/* Background from 'https://bg.ibelick.com/' */}
      <div class="absolute bottom-0 left-[3%] right-0 top-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(171,194,65,.15),rgba(255,255,255,0))]"></div>
      <div className="sm:p-28 relative p-10">
        <h1 className="md:text-4xl text-2xl font-bold text-white">
          My <span className="text-Highlight">Projects.</span>
        </h1>
        <div className="flex gap-4 mt-5">
          <CustumButton
            onClick={() => setSelected("All")}
            selected={selected}
            label="All"
          />
          <CustumButton
            onClick={() => setSelected("React")}
            selected={selected}
            label="React"
          />
          <CustumButton
            onClick={() => setSelected("React Native")}
            selected={selected}
            label="React Native"
          />
        </div>
        <div className="w-full mt-5 flex items-center justify-center gap-4 flex-wrap overflow-y-scroll">
          {projects.map((project) =>
            selected === "All" || selected === project.category ? (
              <ProjectElement key={project.name} project={project} />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
