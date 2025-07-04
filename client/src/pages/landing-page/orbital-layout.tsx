import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";
import {
  Circle,
  Square,
  Triangle,
  Star,
  Hexagon,
  Heart,
  ArrowRight,
} from "lucide-react";
import ActiveDot from "@/components/ActiveDot";

interface WebsiteType {
  name: string;
  ring: number;
  angle: number;
  color: string;
  Icon: React.ElementType;
  description: string;
}

const websiteTypes: WebsiteType[] = [
  {
    name: "Business Websites",
    ring: 1,
    angle: 0,
    color: "#F87171",
    Icon: Square,
    description: "Establish your brand and attract clients online.",
  },
  {
    name: "E-commerce Websites",
    ring: 1,
    angle: 36,
    color: "#60A5FA",
    Icon: Circle,
    description: "Sell products with a smooth shopping experience.",
  },
  {
    name: "Portfolio Websites",
    ring: 1,
    angle: 320,
    color: "#34D399",
    Icon: Triangle,
    description: "Show your work and attract new opportunities.",
  },
  {
    name: "Landing Pages",
    ring: 1,
    angle: 108,
    color: "#FBBF24",
    Icon: Star,
    description: "Drive conversions with focused, single-page designs.",
  },
  {
    name: "Blogs & Content Websites",
    ring: 2,
    angle: 164,
    color: "#A78BFA",
    Icon: Hexagon,
    description: "Share insights, build authority, and grow your audience.",
  },
  {
    name: "Educational Websites",
    ring: 2,
    angle: 180,
    color: "#F472B6",
    Icon: Heart,
    description: "Deliver courses, resources, and online learning tools.",
  },
  {
    name: "Non-Profit & Charity Websites",
    ring: 2,
    angle: 216,
    color: "#3B82F6",
    Icon: Circle,
    description: "Inspire action, raise funds, and share your mission.",
  },
  {
    name: "Personal Websites",
    ring: 2,
    angle: 252,
    color: "#22D3EE",
    Icon: Square,
    description: "Highlight your story, resume, or online identity.",
  },
  {
    name: "Event Websites",
    ring: 2,
    angle: 88,
    color: "#F59E0B",
    Icon: Triangle,
    description: "Promote events, sell tickets, and manage RSVPs.",
  },
  {
    name: "Membership/Subscription Websites",
    ring: 2,
    angle: 310,
    color: "#EC4899",
    Icon: Star,
    description: "Offer gated content and build recurring revenue.",
  },
];

const baseRingRadii = {
  1: 180,
  2: 280,
};

const Orbital = () => {
  const baseRotation = useMotionValue(0);
  const hoverProgress = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isHoveringItem, setIsHoveringItem] = useState<string | null>(null);

  useEffect(() => {
    const controls = animate(baseRotation, 360, {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [baseRotation]);

  useEffect(() => {
    animate(hoverProgress, isHovering ? 1 : 0, {
      stiffness: 100,
      damping: 30,
      duration: 0.3,
    });
  }, [isHovering, hoverProgress]);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Responsive scale factor
  const scaleFactor =
    windowWidth === null
      ? 1
      : windowWidth < 640
      ? 0.6
      : windowWidth < 1024
      ? 0.8
      : 1;

  const ringRadii = {
    1: baseRingRadii[1] * scaleFactor,
    2: baseRingRadii[2] * scaleFactor,
  };

  return (
    <div className="text-white flex items-center justify-center p-4 w-full overflow-hidden">
      <motion.div
        className="relative w-full max-w-4xl aspect-square flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {[1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border-2 border-dashed border-white"
            style={{
              width: ringRadii[ring] * 2,
              height: ringRadii[ring] * 2,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + ring * 0.1, duration: 0.6 }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center z-40">
          {websiteTypes.map((item) => {
            const radius = ringRadii[item.ring];

            const combinedAngle = useTransform(
              [baseRotation, hoverProgress],
              ([rot, hover]) => {
                const currentRot = (rot + item.angle) % 360;
                return currentRot * (1 - hover) + item.angle * hover;
              }
            );

            const springAngle = useSpring(combinedAngle, {
              stiffness: 150,
              damping: 30,
            });

            const x = useTransform(
              springAngle,
              (a) => Math.cos((a * Math.PI) / 180) * radius
            );
            const y = useTransform(
              springAngle,
              (a) => Math.sin((a * Math.PI) / 180) * radius
            );

            const Icon = item.Icon;

            return (
              <motion.div
                key={item.name}
                className="absolute group"
                style={{
                  left: "50%",
                  top: "50%",
                  x,
                  y,
                  translateX: scaleFactor < 0.7 ? "-50px" : "-70px",
                  translateY: scaleFactor < 0.7 ? "-16px" : "-22px",
                  zIndex: isHoveringItem === item.name ? 100 : 10,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHoveringItem(item.name)}
                onHoverEnd={() => setIsHoveringItem(null)}
              >
                {/* Hover Tooltip */}
                <div
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white rounded-md opacity-0 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 shadow-lg z-50 border"
                  style={{
                    padding: scaleFactor < 0.7 ? "6px 10px" : "8px 12px",
                    minWidth: scaleFactor < 0.7 ? 140 : 200,
                    fontSize: scaleFactor < 0.7 ? "0.65rem" : "0.75rem",
                  }}
                >
                  {item.description}
                </div>

                <div
                  className="relative flex items-center gap-2 bg-black border-2 border-purple-600 rounded-lg cursor-pointer shadow-sm transition-all duration-300 ease-out group-hover:shadow-lg"
                  style={{
                    padding: scaleFactor < 0.7 ? "6px 8px" : "8px 12px",
                    minWidth: scaleFactor < 0.7 ? 110 : 140,
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: scaleFactor < 0.7 ? 16 : 20,
                      height: scaleFactor < 0.7 ? 16 : 20,
                    }}
                  >
                    <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                      <Icon
                        size={scaleFactor < 0.7 ? 16 : 20}
                        stroke="none"
                        fill={item.color}
                      />
                    </div>
                    <div className="absolute inset-0 transition-all duration-300 ease-out translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight
                        size={scaleFactor < 0.7 ? 16 : 20}
                        stroke="white"
                        fill="none"
                      />
                    </div>
                  </div>
                  <div
                    className="font-medium whitespace-nowrap"
                    style={{
                      userSelect: "none",
                      fontSize: scaleFactor < 0.7 ? "0.7rem" : "0.875rem",
                    }}
                  >
                    {item.name}
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: `0 0 20px ${item.color}`,
                    filter: "blur(2px)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <ActiveDot />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Orbital;
