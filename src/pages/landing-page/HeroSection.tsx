import Button from "../../components/Button";
function HeroSection() {
  return (
    <div
      className=" flex justify-center border-green-500 border"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-10 border-purple-400 border">
        <h1 className="font-bold text-lg">
          Make your mark on the web with Nimor
        </h1>
        <h1 className="font-bold text-6xl text-center">
          Your Vision, Our Expertise: Let's build something amazing together!
        </h1>
        <Button>Start a project with us</Button>
      </div>
    </div>
  );
}

export default HeroSection;
