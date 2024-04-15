import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import SolutionList from "./SolutionList";
function SolutionsSection() {
  return (
    <div className="flex justify-center min-h-lvh">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20">
        <SectionHeader>
          Solutions for Your Online Success with Nimor.
        </SectionHeader>
        <SolutionList />
        <Button classes="text-2xl pt-8 pb-8 pl-20 pr-20 max-sm:text-lg">
          Make your mark on the web with Nimor
        </Button>
      </div>
    </div>
  );
}

export default SolutionsSection;
