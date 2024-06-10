import { motion } from "framer-motion";
import WordMark from "./WordMark";
import Button from "./Button";
function NavBar() {
  const parentVariants = {
    hidden: { y: 0 },
    visible: { y: 0, transition: { staggerChildren: 0.15 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="sticky top-0 flex justify-center bg-primary z-20 border-b border-b-[#333333]">
      <motion.nav
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="justify-between items-center flex p-4 w-full max-w-7xl"
      >
        <motion.div variants={childVariants}>
          <WordMark classes="text-black" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex items-center gap-8"
        >
          <Button classes="pt-3 pb-3 pl-10 pr-10">Say hello</Button>
        </motion.div>
      </motion.nav>
    </div>
  );
}

export default NavBar;
