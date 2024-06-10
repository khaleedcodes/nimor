import SectionHeader from "../../components/SectionHeader";
import ProjectList from "./ProjectList";

function ProjectsSection() {
  return (
    <div className=" flex justify-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        <SectionHeader>Featured Work</SectionHeader>
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectsSection;
