import Button from "../../components/Button";
import Marquee from "./Marquee";
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
          Make your mark on the web 🕸️ with{" "}
          <span className="text-first-accent">Nimor</span>.
        </h1>
        <Button classes="pt-3 pb-3 pl-10 pr-10">Start a project with us</Button>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-green-400 h-3 w-3 rounded-full"></div>
          <p className="flex items-center justify-center text-sm">
            Accepting projects for{" "}
            {new Date().toLocaleString("default", { month: "long" })}
          </p>
        </div>
      </div>
      <Marquee />
    </div>
  );
}

export default HeroSection;
