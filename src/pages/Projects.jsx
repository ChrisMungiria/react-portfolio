import { useState } from "react";
import CustumButton from "../components/CustumButton";
import ProjectElement from "../components/ProjectElement";

const Projects = () => {
  const [selected, setSelected] = useState("All");
  return (
    <section className="w-screen h-screen bg-background p-28">
      <h1 className="text-4xl font-bold text-white">
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
      <div className="w-full mt-5 flex items-center justify-center gap-4 flex-wrap">
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </div>
    </section>
  );
};

export default Projects;
