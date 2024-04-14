import SectionHeader from "../../components/SectionHeader";
import FaqList from "./FaqList";

function FaqSection() {
  return (
    <div className=" flex justify-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-10">
        <SectionHeader>Questions?</SectionHeader>
        <FaqList />
      </div>
    </div>
  );
}

export default FaqSection;
