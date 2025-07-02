import SectionHeader from "../../components/SectionHeader";
import WebsiteList from "./WebsiteList";
import Button from "../../components/Button";

function WebsitesSection() {
  return (
    <div className="flex justify-center min-h-lvh">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        <SectionHeader>You name it, we build it.</SectionHeader>
        <WebsiteList />
        <Button className="pt-4 pb-4 pl-14 pr-14">
          Ready to build your dream website? Let's get started!
        </Button>
      </div>
    </div>
  );
}

export default WebsitesSection;
