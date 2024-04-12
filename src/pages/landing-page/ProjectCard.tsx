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
      className="flex flex-col gap-4 basis-[600px]"
    >
      <div className="flex flex-col justify-center w-full items-center rounded-lg overflow-hidden border">
        <a className="" href={link}>
          <img className="w-full h-full" src={projectImage} />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-bold">{projectTitle}</p>
          <a href={link} className="text-first-accent hover:underline">{linkName}</a>
        </div>
        <p>{overlayProjectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
