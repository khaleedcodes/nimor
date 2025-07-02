import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import SolutionList from "./SolutionList";
function SolutionsSection() {
  return (
    <div className="flex justify-center min-h-lvh border">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        <div>
          <SectionHeader>Elevate your online presence.</SectionHeader>
        </div>
        <div>
          <SolutionList />
        </div>
        <div>
          <Button className="text-2xl pt-8 pb-8 pl-20 pr-20 max-sm:text-lg">
            Make your mark on the web 🕸️ with Nimor
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SolutionsSection;
