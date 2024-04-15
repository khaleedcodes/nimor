import SectionHeader from "../../components/SectionHeader";
import WebsiteList from "./WebsiteList";
import Button from "../../components/Button";

function WebsitesSection() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-10">
        <SectionHeader>You name it, we build it.</SectionHeader>
        <WebsiteList />
        <Button classes="pt-3 pb-3 pl-10 pr-10">
          Ready to build your dream website? Let's get started!
        </Button>
      </div>
    </div>
  );
}

export default WebsitesSection;
