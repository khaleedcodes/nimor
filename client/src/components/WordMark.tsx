import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const letterVariants = {
  initial: { y: 0 },
  hover: { y: -5, transition: { type: "spring", stiffness: 300 } },
};

const container = {
  hover: { transition: { staggerChildren: 0.05 } },
};

function WordMark() {
  const letters = Array.from("nimor.");

  return (
    <div className={`flex items-center justify-center`}>
      <Link to="/">
        <motion.div
          className="flex text-2xl font-bold text-white"
          variants={container}
          initial="initial"
          whileHover="hover"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={char === "." ? "text-first-accent" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </Link>
    </div>
  );
}

export default WordMark;
