import { motion } from "framer-motion";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import SolutionList from "./SolutionList";
function SolutionsSection() {
  // const parentVariants = {
  //   hidden: { y: 0 },
  //   visible: { y: 0, transition: { staggerChildren: 0.15 } },
  // };
  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex justify-center min-h-lvh">
      <motion.div
        // variants={parentVariants}
        initial="hidden"
        whileInView={"visible"}
        className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20"
      >
        <motion.div variants={childVariants}>
          <SectionHeader>
            Solutions for your online success with Nimor.
          </SectionHeader>
        </motion.div>
        <motion.div variants={childVariants}>
          <SolutionList />
        </motion.div>
        <motion.div variants={childVariants}>
          <Button className="text-2xl pt-8 pb-8 pl-20 pr-20 max-sm:text-lg">
            Make your mark on the web 🕸️ with Nimor
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SolutionsSection;
