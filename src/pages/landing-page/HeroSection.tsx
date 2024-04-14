import Button from "../../components/Button";
import ClientCarousel from "./ClientCarousel";
function HeroSection() {
  return (
    <div
      className=" flex justify-center gap-20 flex-col items-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-7xl max-lg:text-6xl max-md:5xl max-sm:text-4xl text-center">
          Your <span className="text-first-accent">Vision</span>, Our{" "}
          <span className="text-first-accent">Expertise</span>: Let's build
          something amazing together!
        </h1>
        <h1 className="text-xl max-lg:text-lg text-center">
          Make your mark on the web with{" "}
          <span className="text-first-accent">Nimor</span>
        </h1>
        <Button>Start a project with us</Button>
      </div>
      <ClientCarousel />
    </div>
  );
}

export default HeroSection;
