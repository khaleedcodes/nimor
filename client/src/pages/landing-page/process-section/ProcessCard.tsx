import { motion } from "framer-motion";
import {
  Lightbulb,
  Settings,
  Rocket,
  TrendingUp,
  Shield,
  Heart,
  type LucideIcon,
} from "lucide-react";
import MockInterface from "./MockInterface";
import type { ProcessCardProps } from "./types";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  cogs: Settings,
  rocket: Rocket,
  "trending-up": TrendingUp,
  shield: Shield,
  heart: Heart,
};

export default function ProcessCard({
  problem,
  solution,
  cardIcon,
  index,
}: ProcessCardProps) {
  const Icon = iconMap[cardIcon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      }}
      className="w-full mx-auto relative group cursor-pointer"
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <motion.div
        className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden"
        whileHover={{
          borderColor: "rgba(59, 130, 246, 0.5)",
        }}
      >
        {/* Background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40 rounded-2xl"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Step Number */}
        {/* <div className="relative mb-6">
          <motion.span
            className="text-6xl font-bold text-white/10 absolute -top-2 -left-2"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {index + 1}
          </motion.span>
          <motion.span
            className="text-2xl font-bold text-white relative z-10"
            whileHover={{
              scale: 1.1,
              color: "#60a5fa",
            }}
            transition={{ duration: 0.3 }}
          >
            {index + 1}.
          </motion.span>
        </div> */}

        {/* Mock Interface */}
        <div className="relative mb-6">
          <MockInterface stepIndex={index} />
        </div>

        {/* Icon + Text */}
        <div className="relative space-y-4 flex flex-col items-start">
          {Icon && (
            <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
              <Icon size={32} strokeWidth={2.2} />
            </div>
          )}
          <motion.h3
            className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{
              scale: 1.02,
              x: 5,
            }}
            transition={{ duration: 0.3 }}
          >
            {index + 1}. {problem}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
            whileHover={{
              scale: 1.01,
              x: 3,
            }}
            transition={{ duration: 0.3 }}
          >
            {solution}
          </motion.p>
        </div>

        {/* Animated Accent */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 group-hover:opacity-80"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
