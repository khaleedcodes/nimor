import { motion } from "framer-motion";
import { itemVariants } from "./variants";
import type { Service } from "./types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;

  const handleLearnMore = (id: string) => {
    console.log(`Navigate to ${id} service details`);
  };

  // Adjusted grid classes for the new 3x2 layout:
  const getGridClasses = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-2 md:row-span-1"; // 1st item spans 2 columns on top-left
      case 1:
        return "md:col-span-1 md:row-span-1"; // 2nd item top-right
      case 2:
        return "md:col-span-1 md:row-span-1"; // 3rd item bottom-left
      case 3:
        return "md:col-span-2 md:row-span-1"; // 4th item spans 2 columns bottom-right
      default:
        return "";
    }
  };

  const getCardHeight = (index: number) => {
    switch (index) {
      case 0:
      case 3:
        return "h-full min-h-[280px]"; // Make tall cards same height
      default:
        return "h-full min-h-[280px]";
    }
  };

  return (
    <motion.div
      className={`group ${getGridClasses(index)}`}
      variants={itemVariants}
    >
      <motion.div
        className={`rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl text-black ${
          service.hoverShadowColor
        } cursor-pointer ${getCardHeight(
          index
        )} flex flex-col justify-between ${service.bgColor}`}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <div>
          <div
            className={`w-14 h-14 ${service.iconBgColor} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}
          >
            <Icon className={`w-7 h-7 ${service.iconColor}`} />
          </div>

          <h3 className={"font-bold mb-4  text-2xl"}>{service.title}</h3>
          <p className={"leading-relaxed mb-8  text-base"}>
            {service.description}
          </p>
        </div>

        <motion.button
          onClick={() => handleLearnMore(service.id)}
          className={`flex items-center ${service.ctaColor} font-semibold transition-colors duration-300 mt-auto`}
          whileHover={{ x: 4 }}
        >
          <span>Learn More</span>
          <motion.svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
