import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Marquee from "./HeroMarquee";
import HeroCarousel from "./HeroCarousel";
import { ChevronRight, Sparkles } from "lucide-react";

function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth magnetic effects
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  
  // Transform values for parallax effects
  const magneticX = useTransform(springX, [-300, 300], [-20, 20]);
  const magneticY = useTransform(springY, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const variants = {
    hidden: { y: 0 },
    visible: { 
      y: 0, 
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.2
      } 
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 10
      } 
    },
  };

  const MarqueeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        delay: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 15px rgba(99, 102, 241, 0.2)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(99, 102, 241, 0.4)",
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const arrowVariants = {
    initial: { x: 0, rotate: 0 },
    hover: { 
      x: 8, 
      rotate: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
  };

  const wordVariants = {
    initial: { 
      y: 0, 
      rotateX: 0,
      scale: 1,
      textShadow: "0 0px 0px rgba(99, 102, 241, 0)"
    },
    hover: { 
      y: -8, 
      rotateX: 15,
      scale: 1.05,
      textShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.2
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const words = ["Make", "your", "mark", "on", "the", "web"];

  return (
    <div
      ref={heroRef}
      className="flex justify-center gap-20 flex-col items-center mt-52 px-2 relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{
          x: magneticX,
          y: magneticY,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{
          x: useTransform(magneticX, value => -value * 0.5),
          y: useTransform(magneticY, value => -value * 0.3),
        }}
      />

      <motion.div
        className="w-full flex flex-col justify-center items-center gap-6 relative z-10"
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{
          x: useTransform(magneticX, value => value * 0.02),
          y: useTransform(magneticY, value => value * 0.01),
        }}
      >
        {/* Enhanced title with magnetic effects */}
        <motion.h1
          variants={itemVariants}
          className="font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-center relative"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-4 cursor-pointer select-none word-hover-glow ${
                word === "mark" ? "title-gradient font-sevillana" : ""
              }`}
              initial="initial"
              whileHover="hover"
              variants={wordVariants}
              style={{
                transformOrigin: "center bottom",
                transformStyle: "preserve-3d",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                mass: 0.5
              }}
            >
              {word}
              {word === "mark" && (
                <motion.div
                  className="absolute -top-2 -right-2"
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
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg max-lg:text-base max-md:text-sm max-sm:text-sm text-center max-w-[800px] text-gray-600 leading-relaxed"
          style={{
            x: useTransform(magneticX, value => value * 0.01),
          }}
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
          {/* Enhanced First Button */}
          <motion.a
            href="#"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="group relative flex items-center justify-center gap-2 bg-new-accent pt-4 pb-4 px-10 rounded-xl border-2 border-first-accent text-first-accent text-center text-sm font-semibold overflow-hidden cursor-pointer"
            style={{
              x: useTransform(magneticX, value => value * 0.03),
            }}
          >
            <div className="absolute inset-0 bg-first-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              See what we've built
            </span>
            <motion.div variants={arrowVariants} className="relative z-10 group-hover:text-white transition-colors duration-300">
              <ChevronRight strokeWidth={2} className="w-4 h-4" />
            </motion.div>
          </motion.a>

          {/* Enhanced Second Button */}
          <motion.a
            href="#"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="group relative flex items-center justify-center gap-2 pt-4 pb-4 px-10 rounded-xl border-2 border-transparent bg-gradient-to-r from-first-accent to-second-accent text-white text-center text-sm font-semibold overflow-hidden cursor-pointer"
            style={{
              x: useTransform(magneticX, value => -value * 0.03),
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-second-accent to-first-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            <span className="relative z-10">Launch your project</span>
            <motion.div variants={arrowVariants} className="relative z-10">
              <ChevronRight strokeWidth={2} className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>

        <motion.div 
          className="w-full" 
          variants={itemVariants}
          style={{
            x: useTransform(magneticX, value => value * 0.005),
            y: useTransform(magneticY, value => value * 0.005),
          }}
        >
          <HeroCarousel />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={MarqueeVariants}
        className="w-full flex items-center justify-center relative z-10"
        style={{
          x: useTransform(magneticX, value => -value * 0.01),
        }}
      >
        <Marquee />
      </motion.div>
    </div>
  );
}

export default HeroSection;
