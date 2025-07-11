import { motion } from "framer-motion";

import wordMark1 from "../../../assets/images/wordmarks/wordmark (1).png";
import wordMark2 from "../../../assets/images/wordmarks/wordmark (2).png";
import wordMark3 from "../../../assets/images/wordmarks/wordmark (3).png";
import wordMark4 from "../../../assets/images/wordmarks/wordmark (4).png";
import wordMark5 from "../../../assets/images/wordmarks/wordmark (5).png";
import wordMark6 from "../../../assets/images/wordmarks/wordmark (6).png";

const wordMarks = [
  wordMark1,
  wordMark2,
  wordMark3,
  wordMark4,
  wordMark5,
  wordMark6,
];

const marqueeVariants = {
  animate: {
    x: [0, 1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="flex flex-col gap-4 w-full  max-w-[1200px]">
      <p className="font-bold text-sm sm:text-base">
        Trusted by emerging businesses and fast-growing brands.
      </p>

      <div className="marquee flex">
        <div className="shadow-blend-left left-0 z-10"></div>
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="gap-4 flex flex-row justify-center items-center">
            {[
              [...Array(50)].map(() => (
                <>
                  {wordMarks.map((wordMark) => {
                    return <img src={wordMark} className="w-[200px]" />;
                  })}
                </>
              )),
            ]}
          </div>
        </motion.div>
        <div className="shadow-blend-right right-0 z-10"></div>
      </div>
    </div>
  );
};

export default Marquee;
