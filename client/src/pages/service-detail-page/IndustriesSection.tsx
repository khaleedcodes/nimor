import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { industries, type Industry } from "./industriesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface IndustryCardProps {
  industry: Industry;
  isExpanded: boolean;
  onToggle: () => void;
}

function IndustryCard({ industry, isExpanded, onToggle }: IndustryCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="glassmorphism rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/60 transition-colors group-hover:text-white" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: "easeOut" },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              className="text-white/80 text-sm leading-relaxed pt-2"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {industry.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function IndustriesSection() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (industryId: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(industryId)) {
        newSet.delete(industryId);
      } else {
        // Close all other cards and open this one
        newSet.clear();
        newSet.add(industryId);
      }
      return newSet;
    });
  };

  return (
    <motion.section
      className="py-20 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
            variants={cardVariants}
          >
            Industries We Collaborate With
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            As a company with over a decade of experience, we at Brand Vision
            are proud to have worked with many outstanding businesses and
            industries worldwide. These partnerships have allowed us to expand
            our knowledge, skills, and expertise, and have helped us to
            continuously improve our services and deliver excellent results for
            our clients.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              isExpanded={expandedCards.has(industry.id)}
              onToggle={() => toggleCard(industry.id)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
