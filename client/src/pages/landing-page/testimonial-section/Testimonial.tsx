import { motion } from "framer-motion";
import TestimonialMarquee from "./TestimonialMarquee";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full mx-2 flex justify-center px-4 sm:px-6 lg:px-8 bg-[rgb(96,76,199,0.2)] rounded-xl relative overflow-hidden py-20 ${className}`}
    >
      <div className="max-w-7xl w-full flex flex-col items-center ">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {/* Rating Badge */}
          <motion.div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full border text-sm"
            variants={badgeVariants}
          >
            <span className="text-yellow-400 mr-2 text-base">★</span>
            Rated 5 by our clients
          </motion.div>

          {/* Heading */}
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
            Words of praise from others about our presence.
          </h2>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full"
        >
          <TestimonialMarquee />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
