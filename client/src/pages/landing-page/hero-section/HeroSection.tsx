import { motion } from "framer-motion";
import Marquee from "./HeroMarquee";
import HeroCarousel from "./HeroCarousel";
import { ChevronRight, Sparkles } from "lucide-react";

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

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  return (
    <div
      className="flex justify-center gap-20 flex-col items-center mt-52 px-2"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-6"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-center"
        >
          Make your{" "}
          <span className="title-gradient font-sevillana relative">
            mark
            <motion.div
              className="absolute -top-2 -right-1"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </span>{" "}
          on the web
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-sm max-lg:text-sm max-md:text-sm max-sm:text-sm text-center max-w-[800px]"
        >
          At Nimor, we build bold, conversion-driven websites that put your
          brand in front of the right people. Whether you're launching something
          new or leveling up your current site, we help you stand out and grow
          online.
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 mb-4 w-full max-w-lg justify-center"
        >
          {/* First Button */}
          <motion.a
            href="#"
            initial="initial"
            whileHover="hover"
            variants={{
              initial: {},
              hover: {},
            }}
            className="relative overflow-hidden flex items-center justify-center gap-1 pt-3 pb-3 px-8 rounded-md border border-first-accent text-first-accent text-sm z-10 group"
          >
            {/* Button Text and Icon */}
            <span className="relative z-20 flex items-center gap-1 group-hover:text-white transition-colors duration-300">
              See what we've built
              <motion.div variants={arrowVariants}>
                <ChevronRight strokeWidth={1.5} />
              </motion.div>
            </span>

            {/* Background Slide on Hover */}
            <motion.div
              variants={{
                initial: { x: "-100%" },
                hover: { x: "0%" },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-first-accent z-0"
            />
          </motion.a>

          {/* Second Button */}
          <motion.a
            href="#contact"
            initial="initial"
            whileHover="hover"
            className="flex items-center justify-center gap-1 pt-3 pb-3 px-8 rounded-md border border-transparent bg-first-accent text-white text-center transition hover:bg-second-accent text-sm"
          >
            Launch your project
            <motion.div variants={arrowVariants}>
              <ChevronRight strokeWidth={1.5} />
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.div className="w-full" variants={itemVariants}>
          <HeroCarousel />
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
