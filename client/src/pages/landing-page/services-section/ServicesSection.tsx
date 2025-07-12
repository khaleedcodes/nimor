import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ServicesGrid from "./ServicesGrid";
import { headerVariants, itemVariants } from "./variants";
import { services } from "./servicesData";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const ServicesSection: React.FC = () => {
  return (
    <div className="w-full px-2">
      <section className="py-10 min-h-lvh bg-new-accent mt-20 rounded-xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-4 mb-16 text-left"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Left side: SectionHeader */}
            <div className="flex-shrink-0 w-full lg:w-5/12">
              <SectionHeader>What we do best</SectionHeader>
            </div>

            {/* Right side: Description */}
            <div className="w-full lg:w-7/12">
              <p className="text-sm leading-relaxed max-w-2xl">
                We deliver high-performance digital solutions that drive
                results. From stunning designs to seamless development, we've
                got you covered.
              </p>
            </div>
          </motion.div>

          <ServicesGrid services={services} />

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
                Ready to build your dream website? Let's get started!
                <motion.div variants={arrowVariants}>
                  <ChevronRight strokeWidth={1.5} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
