import { motion } from "framer-motion";

interface MockInterfaceProps {
  stepIndex: number;
}

export default function MockInterface({ stepIndex }: MockInterfaceProps) {
  return (
    <motion.div
      className="bg-gray-800/80 rounded-lg p-4 border border-gray-700/50"
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(31, 41, 55, 0.9)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Window header with pulsing dots */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2">
          <motion.div
            className="w-3 h-3 bg-red-500/80 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-3 h-3 bg-yellow-500/80 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-3 h-3 bg-green-500/80 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.6,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          className="w-4 h-4 bg-gray-600/50 rounded"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
        />
      </div>

      {/* Dynamic mock content based on step */}
      <div className="space-y-2">
        {stepIndex === 0 && (
          <>
            <motion.div
              className="h-3 bg-gray-600/50 rounded w-3/4"
              animate={{
                opacity: [0.5, 1, 0.5],
                width: ["75%", "85%", "75%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="h-3 bg-gray-600/30 rounded w-1/2"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                width: ["50%", "60%", "50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            <div className="flex space-x-2 mt-3">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              />
            </div>
          </>
        )}

        {stepIndex === 1 && (
          <>
            <div className="flex justify-between items-center">
              <motion.div
                className="h-2 bg-gray-600/50 rounded w-1/4"
                animate={{
                  width: ["25%", "35%", "25%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="px-2 py-1 bg-orange-500/80 text-xs rounded text-white"
                animate={{
                  scale: [1, 1.05, 1],
                  backgroundColor: ["rgba(249, 115, 22, 0.8)", "rgba(249, 115, 22, 1)", "rgba(249, 115, 22, 0.8)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Active
              </motion.div>
            </div>
            <motion.div
              className="h-2 bg-gray-600/30 rounded w-1/3"
              animate={{
                width: ["33%", "43%", "33%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            <div className="flex justify-between items-center">
              <motion.div
                className="h-2 bg-gray-600/50 rounded w-1/4"
                animate={{
                  width: ["25%", "35%", "25%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="px-2 py-1 bg-green-500/80 text-xs rounded text-white"
                animate={{
                  scale: [1, 1.05, 1],
                  backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(34, 197, 94, 1)", "rgba(34, 197, 94, 0.8)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
              >
                Complete
              </motion.div>
            </div>
          </>
        )}

        {stepIndex === 2 && (
          <>
            <motion.div
              className="h-3 bg-gray-600/50 rounded w-full"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="h-3 bg-gray-600/30 rounded w-2/3"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                width: ["66%", "76%", "66%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
            <div className="flex space-x-2 mt-2">
              <motion.div
                className="w-8 h-8 bg-blue-500/80 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -3, 0],
                  backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(59, 130, 246, 1)", "rgba(59, 130, 246, 0.8)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-8 h-8 bg-green-500/80 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -3, 0],
                  backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(34, 197, 94, 1)", "rgba(34, 197, 94, 0.8)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-8 h-8 bg-purple-500/80 rounded-full"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -3, 0],
                  backgroundColor: ["rgba(168, 85, 247, 0.8)", "rgba(168, 85, 247, 1)", "rgba(168, 85, 247, 0.8)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />
            </div>
          </>
        )}

        {stepIndex === 3 && (
          <>
            <div className="grid grid-cols-3 gap-2">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-4 h-4 bg-white/80 rounded"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-4 h-4 bg-white/80 rounded"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-4 h-4 bg-white/80 rounded"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}