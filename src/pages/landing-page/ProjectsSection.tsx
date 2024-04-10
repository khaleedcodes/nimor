import ProjectList from "./ProjectList";

function ProjectsSection() {
  return (
    <div className=" flex justify-center border-green-500 border">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center border-purple-400 border">
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectsSection;
