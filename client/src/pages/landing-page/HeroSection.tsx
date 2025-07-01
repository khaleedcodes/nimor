import { motion } from "framer-motion";
import Button from "../../components/Button";
import Marquee from "./Marquee";
import ActiveDot from "../../components/ActiveDot";
import HeroCarousel from "./HeroCarousel";

function HeroSection() {
  const variants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const MarqueeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div
      className=" flex justify-center gap-20 flex-col items-center bg-gradient mt-24"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* <div className="bg-gradient min-h-lvh absolute z-40 top-0 left-0 h-full w-full"></div> */}
      <motion.div
        className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-6"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-center"
        >
          Make your <span className="title-gradient font-sevillana">mark</span>{" "}
          on the web
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-sm max-lg:text-sm max-md:text-sm max-sm:text-sm text-center max-w-[600px]"
        >
          At Nimor, we create websites that help you make your mark online. Our
          engaging, user-friendly designs elevate your brand, connect with your
          audience, and drive real results—Whether you're launching something
          new or refreshing your existing presence
        </motion.h2>
        <div className="flex gap-6 mt-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-1 bg-card-bg pt-3 pb-3 pl-10 pr-10"
          >
            <ActiveDot />
            <p className="flex items-center justify-center text text-first-accent">
              Accepting projects for{" "}
              {new Date().toLocaleString("default", { month: "long" })}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button classes="pt-3 pb-3 pl-10 pr-10">
              Start a project with us
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <HeroCarousel />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={MarqueeVariants}
        className="w-full flex items-center justify-center"
      >
        <Marquee />
      </motion.div>
    </div>
  );
}

export default HeroSection;
