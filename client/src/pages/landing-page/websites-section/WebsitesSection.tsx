import WebsiteOrbit from "./WebsiteOrbit";
import { motion } from "framer-motion";
import { headerVariants, itemVariants } from "../services-section/variants";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

function WebsitesSection() {
  return (
    <div className="flex justify-center mt-20 px-2 bg-white py-8 rounded-xl mx-2">
      <div className="max-w-screen-xl w-full  flex flex-col justify-center items-center ">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-4 text-left"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side: SectionHeader */}
          <div className="flex-shrink-0 w-full lg:w-5/12">
            <SectionHeader>Websites we build</SectionHeader>
          </div>

          {/* Right side: Description */}
          <div className="w-full lg:w-7/12">
            <p className="text-sm leading-relaxed max-w-2xl text-black">
              Whether you're looking to establish your brand, sell products
              online, or showcase your creative work, we design websites that
              deliver results and delight your audience.
            </p>
          </div>
        </motion.div>
        <WebsiteOrbit />
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
              Start your custom build today
              <motion.div variants={arrowVariants}>
                <ChevronRight strokeWidth={1.5} />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WebsitesSection;
