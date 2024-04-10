import { useState } from "react";
import type { ProjectCardProps } from "../../types/types";
function ProjectCard({
  projectImage,
  projectTitle,
  overlayProjectDescription,
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
      className="rounded-lg text-lg basis-[600px] border border-blue-900"
    >
      <div className="flex flex-col justify-center w-full items-center">
        <a className="" href={link}>
          <img
            className="border border-red-600 w-full h-full"
            src={projectImage}
          />
        </a>
      </div>
      <div>
        <p>{projectTitle}</p>
        <p>{overlayProjectDescription}</p>
        <a href={link}>{linkName}</a>
      </div>
    </div>
  );
}

export default ProjectCard;
