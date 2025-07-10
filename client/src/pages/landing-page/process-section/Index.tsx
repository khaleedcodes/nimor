import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { processCards } from "./types";
// import SectionHeader from "@/components/SectionHeader";

export default function Process() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-12">
        {/* Custom layout for cards */}
        <div className="mx-auto space-y-8">
          {/* First row: cards 1, 2, 3 side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processCards.slice(0, 3).map((card) => (
              <ProcessCard
                key={card.index}
                problem={card.problem}
                solution={card.solution}
                cardIcon={card.cardIcon}
                gradientFrom={card.gradientFrom}
                gradientTo={card.gradientTo}
                accentColor={card.accentColor}
                index={card.index}
              />
            ))}
          </div>

          {/* Second row: last card full width */}
          <div>
            {processCards.length > 3 && (
              <ProcessCard
                key={processCards[3].index}
                problem={processCards[3].problem}
                solution={processCards[3].solution}
                cardIcon={processCards[3].cardIcon}
                gradientFrom={processCards[3].gradientFrom}
                gradientTo={processCards[3].gradientTo}
                accentColor={processCards[3].accentColor}
                index={processCards[3].index}
              />
            )}
          </div>
        </div>

        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg font-semibold"
          >
            <span>Start Your Project</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
