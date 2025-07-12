import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { itemVariants } from "../services-section/variants";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

interface Feature {
  title: string;
  description: string;
  id?: string;
}

interface WhyChooseUsProps {
  features?: Feature[];
  companyName?: string;
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: "1",
    title: "Strategic Design That Converts",
    description:
      "We don't just make pretty websites—we build high-performing digital experiences that turn visitors into customers. Every page is optimized to convert and aligned with your business goals.",
  },
  {
    id: "2",
    title: "Senior Expertise at Every Step",
    description:
      "From strategy to launch, you'll work directly with experienced designers and developers. No hand-offs. No fluff. Just real talent delivering real results.",
  },
  {
    id: "3",
    title: "Make Your Mark on the Web",
    description:
      "Your brand deserves to stand out. We help you own your space online with bold, modern designs that feel uniquely you—backed by rock-solid performance and purpose.",
  },
];

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  features = defaultFeatures,
  companyName = "Nimor",
  className = "",
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: "-50px 0px",
  });
  const areFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: "-50px 0px",
  });

  // Parallax scroll effect for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px ",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Feature animation variants
  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
    hover: {
      scale: 1.02,
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Border animation variants
  const borderVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    hover: {
      scaleX: 1.1,
      opacity: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-black mt-20 mx-2 rounded-xl text-white py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden ${className}`}
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-50"
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Title Column */}
          <motion.div
            ref={titleRef}
            className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-700 pr-0 lg:pr-6 relative"
            style={{ y: titleY }}
          >
            {/* Animated border line */}
            <motion.div
              className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent hidden lg:block"
              variants={borderVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            />

            <motion.h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-4 relative"
              variants={titleVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
            >
              {/* Animated text gradient */}
              <motion.span
                className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Why Choose <br className="hidden sm:block" />
                {companyName}
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r to-new-accent from-second-accent"
                initial={{ width: 0 }}
                animate={isTitleInView ? { width: "60%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </motion.h2>

            <motion.button
              onClick={() =>
                featuresRef.current &&
                (featuresRef.current as HTMLElement).scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-6 px-5 py-2 bg-new-accent text-first-accent rounded-full text-xs font-medium shadow-md relative overflow-hidden group"
              variants={buttonVariants}
              initial="hidden"
              animate={isTitleInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-first-accent to-transparent opacity-0 group-hover:opacity-20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">What Sets Us Apart</span>
            </motion.button>
          </motion.div>

          {/* Features Column */}
          <motion.div
            ref={featuresRef}
            className="w-full lg:w-2/3 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={areFeaturesInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id || index}
                className="pb-6 border-b border-gray-700 flex flex-col lg:flex-row gap-4 relative group cursor-pointer"
                variants={featureVariants}
                whileHover="hover"
              >
                {/* Feature number indicator */}
                <motion.div
                  className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gray-700 to-transparent"
                  variants={borderVariants}
                  whileHover="hover"
                />

                <div className="lg:flex-1">
                  <motion.h3
                    className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors duration-300"
                    variants={textRevealVariants}
                  >
                    {feature.title}
                  </motion.h3>
                </div>

                <div className="lg:flex-[2]">
                  <motion.p
                    className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    variants={textRevealVariants}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-first-accent to-transparent opacity-0 group-hover:opacity-5 rounded-lg"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            className="inline-block"
          >
            <Button className="py-3 px-6 sm:py-4 sm:px-10 md:px-14 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
              See what makes us different
              <motion.div variants={arrowVariants}>
                <ChevronRight strokeWidth={1.5} />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
