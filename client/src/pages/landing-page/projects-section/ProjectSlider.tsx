import React from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  caption: string;
  logo: string;
  bgColor: string;
}

const ProjectSlider: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "FinanceFlow",
      caption: "Finance App",
      logo: "💰",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "GenZNews",
      caption: "Gen Z News",
      logo: "📱",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      name: "TechVault",
      caption: "Tech Platform",
      logo: "🚀",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      name: "LifestyleCo",
      caption: "Lifestyle Brand",
      logo: "✨",
      bgColor: "bg-pink-50",
    },
    {
      id: 5,
      name: "CryptoCore",
      caption: "Crypto Exchange",
      logo: "₿",
      bgColor: "bg-orange-50",
    },
    {
      id: 6,
      name: "FitnessFlex",
      caption: "Fitness App",
      logo: "💪",
      bgColor: "bg-red-50",
    },
    {
      id: 7,
      name: "EcoMarket",
      caption: "Sustainable Commerce",
      logo: "🌱",
      bgColor: "bg-emerald-50",
    },
    {
      id: 8,
      name: "StreamlinePay",
      caption: "Payment Gateway",
      logo: "💳",
      bgColor: "bg-indigo-50",
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black via-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black via-white to-transparent pointer-events-none"></div>

      <div className="flex">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{
            x: [-1200, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
          style={{
            width: "fit-content",
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className={`
                flex-shrink-0 w-72 h-48 rounded-2xl shadow-md p-6
                ${project.bgColor} border border-gray-100
                cursor-pointer transition-transform duration-300
                hover:scale-105 hover:shadow-lg
                flex flex-col justify-between
              `}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-4">{project.logo}</div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {project.caption}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSlider;
