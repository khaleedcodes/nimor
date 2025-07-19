import { motion } from "framer-motion";

export default function HeroSection() {
  const variants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="flex justify-center gap-12 flex-col items-center px-4 pt-40 pb-32"
    >
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-10 max-w-screen-xl"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-8xl leading-[1.1] text-center text-white tracking-tight"
        >
          We help brands thrive online
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-center leading-relaxed"
        >
          Nimor is a creative web design studio helping brands launch
          high-impact websites that are clean, modern, and built to convert. We
          help you make a statement online—whether you're just starting or ready
          to scale.
        </motion.p>
      </motion.div>
    </div>
  );
}
