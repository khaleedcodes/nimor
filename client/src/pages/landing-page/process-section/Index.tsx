import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { processCards } from "./types";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";
import { itemVariants } from "../services-section/variants";
// import SectionHeader from "@/components/SectionHeader";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

export default function Process() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced background decorations */}
      <div className="fixed inset-0  pointer-events-none">
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

      <div className="relative z-10 container mx-auto py-12">
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
              Start Your Project
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
