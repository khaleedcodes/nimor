import SectionHeader from "../../components/SectionHeader";
import Process from "./process-section/Index";
import { motion } from "framer-motion";
function ProjectRoadmap() {
  return (
    <div className="flex justify-center min-h-lvh">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center gap-20 max-sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <SectionHeader>Our process</SectionHeader>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From discovery to launch, we follow a proven methodology that
            transforms your vision into exceptional digital experiences
          </motion.p>
        </motion.div>
        <Process />
      </div>
    </div>
  );
}

export default ProjectRoadmap;
