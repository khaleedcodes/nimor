import SectionHeader from "../../../components/SectionHeader";
import Process from "./Index";
import { motion } from "framer-motion";
import { headerVariants } from "../services-section/variants";

function ProjectRoadmap() {
  return (
    <div className="flex justify-center min-h-lvh  bg-[rgb(96,76,199,0.2)] rounded-xl mx-2 mt-20 py-8">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center ">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-4 text-left"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side: SectionHeader */}
          <div className="flex-shrink-0 w-full lg:w-5/12">
            <SectionHeader>Our process</SectionHeader>
          </div>

          {/* Right side: Description */}
          <div className="w-full lg:w-7/12">
            <p className="text-sm leading-relaxed max-w-2xl text-white">
              From discovery to launch, we follow a proven methodology that
              transforms your vision into exceptional digital experiences
            </p>
          </div>
        </motion.div>
        <Process />
      </div>
    </div>
  );
}

export default ProjectRoadmap;
