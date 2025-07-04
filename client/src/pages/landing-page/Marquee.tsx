import BundleupWordMark from "../../components/BundleupWordMark";
import NairaupdatesngWordMark from "../../components/NairaupdatesngWordMark";
import QuizwaveWordMark from "../../components/QuizwaveWordMark";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="marquee flex">
      <div className="shadow-blend-left left-0 z-10"></div>
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="gap-4 flex flex-row justify-center items-center">
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <BundleupWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <QuizwaveWordMark />
          <span className="text-2xl font-bold text-first-accent">·</span>
          <NairaupdatesngWordMark />
        </div>
      </motion.div>
      <div className="shadow-blend-right right-0 z-10"></div>
    </div>
  );
};

export default Marquee;
