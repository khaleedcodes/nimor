import { motion } from "framer-motion";
import { containerVariants } from "./variants";
import ServiceCard from "./ServiceCard";
import type { Service } from "./types";

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
