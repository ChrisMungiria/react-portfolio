import { useState } from "react";
import { techStacks } from "../lib/constants";

const TechStacksComponent = () => {
  const [activeTechStack, setActiveTechStack] = useState(techStacks[0]);

  return (
    <div className="mt-20 flex">
      <div className="flex gap-3">
        <div className="h-full w-2  bg-primary rounded-3xl">
          <div
            className={`
          ${
            // Dynamic height based on the active techStack
            activeTechStack.label === "HTML/CSS"
              ? "h-1/5"
              : activeTechStack.label === "JavaScript"
              ? "h-2/5"
              : activeTechStack.label === "ReactJS"
              ? "h-3/5"
              : activeTechStack.label === "React Native"
              ? "h-4/5"
              : activeTechStack.label === "Figma"
              ? "h-full"
              : ""
          }
          w-full bg-Highlight rounded-3xl`}
          ></div>
        </div>
        <div className="flex flex-col gap-10 cursor-pointer h-full">
          {techStacks.map((techStack) => {
            return (
              <h1
                // Check if the current techStack is the active one
                className={`${
                  activeTechStack.label === techStack.label
                    ? "text-white"
                    : "text-primary"
                } font-bold text-2xl`}
                key={techStack.label}
                onClick={() => setActiveTechStack(techStack)}
              >
                {techStack.label}
              </h1>
            );
          })}
        </div>
      </div>
      <p className="text-white ml-5 w-2/3 text-2xl">
        {activeTechStack.description}
      </p>
    </div>
  );
};

export default TechStacksComponent;
