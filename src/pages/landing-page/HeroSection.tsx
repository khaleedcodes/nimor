import { motion } from "framer-motion";
import Button from "../../components/Button";
import Marquee from "./Marquee";
import ActiveDot from "../../components/ActiveDot";

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
      className=" flex justify-center gap-20 flex-col items-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <motion.div
        className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-6"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-7xl max-lg:text-6xl max-md:5xl max-sm:text-4xl text-center"
        >
          Make your <span className="title-gradient">mark</span> on the web
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-1"
        >
          <ActiveDot />
          <p className="flex items-center justify-center text">
            Accepting projects for{" "}
            {new Date().toLocaleString("default", { month: "long" })}
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button classes="pt-3 pb-3 pl-10 pr-10">
            Start a project with us
          </Button>
        </motion.div>
      </motion.div>
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
