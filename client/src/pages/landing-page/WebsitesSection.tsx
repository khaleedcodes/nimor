import Services from "./services-section/Services";
// import WebsiteList from "./WebsiteList";

function WebsitesSection() {
  return (
    <div className="flex justify-center min-h-lvh bg-[rgb(96,76,199,0.2)]  mt-20 rounded-xl">
      <div className="max-w-screen-xl w-full  flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        {/* <WebsiteList/> */}
        <Services />
      </div>
    </div>
  );
}

export default WebsitesSection;
