import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import HowItWorksList from "./HowItWorksList";
function ProjectRoadmap() {
  return (
    <div className="flex justify-center min-h-lvh">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        <SectionHeader>Project Roadmap</SectionHeader>
        <HowItWorksList />
        <Button className="pt-4 pb-4 pl-14 pr-14">Get started today</Button>
      </div>
    </div>
  );
}

export default ProjectRoadmap;
