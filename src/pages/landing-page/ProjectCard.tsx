import { useState } from "react";
import type { ProjectCardProps } from "../../types/types";
function ProjectCard({
  projectImage,
  projectTitle,
  link,
  linkName,
}: ProjectCardProps) {
  const [isOverLayActive, setIsOverLayActive] = useState(false);

  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }

  return (
    <div
      onMouseEnter={toggleOverLay}
      onMouseLeave={toggleOverLay}
      className="flex flex-col gap-4 basis-[600px]"
    >
      <div className="flex flex-col justify-center w-full items-center rounded-lg overflow-hidden border border-card-bg">
        <a className="" href={link}>
          <img
            className="w-full h-full hover:scale-105 transition duration-300"
            src={projectImage}
          />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-semibold">{projectTitle}</p>
          <a
            href={link}
            className="text-first-accent hover:text-second-accent duration-300 transition-all border-b border-b-transparent hover:border-b-second-accent"
          >
            {linkName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
