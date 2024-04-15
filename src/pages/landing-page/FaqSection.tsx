import SectionHeader from "../../components/SectionHeader";
import ContactForm from "./ContactForm";
import FaqList from "./FaqList";

function FaqSection() {
  return (
    <div className=" flex justify-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-10">
        <SectionHeader>Questions?</SectionHeader>
        <div className="flex items-stretch gap-10 flex-wrap">
          <FaqList />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
