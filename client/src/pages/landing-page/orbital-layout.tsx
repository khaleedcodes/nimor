import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";
import { Circle, Square, Triangle, Star, Hexagon, Heart } from "lucide-react";
import ActiveDot from "@/components/ActiveDot";

interface WebsiteType {
  name: string;
  ring: number;
  angle: number;
  color: string;
  Icon: React.ElementType;
}

const websiteTypes: WebsiteType[] = [
  {
    name: "Business Websites",
    ring: 1,
    angle: 0,
    color: "#F87171",
    Icon: Square,
  },
  {
    name: "E-commerce Websites",
    ring: 1,
    angle: 36,
    color: "#60A5FA",
    Icon: Circle,
  },
  {
    name: "Portfolio Websites",
    ring: 1,
    angle: 320,
    color: "#34D399",
    Icon: Triangle,
  },
  { name: "Landing Pages", ring: 1, angle: 108, color: "#FBBF24", Icon: Star },
  {
    name: "Blogs & Content Websites",
    ring: 2,
    angle: 164,
    color: "#A78BFA",
    Icon: Hexagon,
  },
  {
    name: "Educational Websites",
    ring: 2,
    angle: 180,
    color: "#F472B6",
    Icon: Heart,
  },
  {
    name: "Non-Profit & Charity Websites",
    ring: 2,
    angle: 216,
    color: "#3B82F6",
    Icon: Circle,
  },
  {
    name: "Personal Websites",
    ring: 2,
    angle: 252,
    color: "#22D3EE",
    Icon: Square,
  },
  {
    name: "Event Websites",
    ring: 2,
    angle: 88,
    color: "#F59E0B",
    Icon: Triangle,
  },
  {
    name: "Membership/Subscription Websites",
    ring: 2,
    angle: 310,
    color: "#EC4899",
    Icon: Star,
  },
];

const ringRadii = {
  1: 180,
  2: 280,
};

const Orbital = () => {
  const baseRotation = useMotionValue(0);
  const hoverProgress = useMotionValue(0); // 0 = rotating, 1 = fixed position

  useEffect(() => {
    // Always animate baseRotation continuously
    const controls = animate(baseRotation, 360, {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [baseRotation]);

  // Animate hoverProgress on hover state changes
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    animate(hoverProgress, isHovering ? 1 : 0, {
      stiffness: 100,
      damping: 30,
      duration: 0.3,
    });
  }, [isHovering, hoverProgress]);

  return (
    <div className=" text-white flex items-center justify-center p-4 w-full">
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
              width: ringRadii[ring as keyof typeof ringRadii] * 2,
              height: ringRadii[ring as keyof typeof ringRadii] * 2,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + ring * 0.1, duration: 0.6 }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          {websiteTypes.map((item) => {
            const radius = ringRadii[item.ring as keyof typeof ringRadii];

            // Interpolate angle between rotating and fixed on hoverProgress
            // angle = baseRotation + item.angle when hoverProgress=0 (no hover)
            // angle = item.angle when hoverProgress=1 (hovered)
            const rotatingAngle = useTransform(
              baseRotation,
              (r) => (r + item.angle) % 360
            );
            const angle = useTransform(
              hoverProgress,
              [0, 1],
              [rotatingAngle.get(), item.angle]
            );

            // Since rotatingAngle.get() might be stale on first render, better to combine with useTransform as below:
            // So let's create a combined angle transform properly:
            const combinedAngle = useTransform(
              [baseRotation, hoverProgress],
              ([rot, hover]) => {
                const currentRot = (rot + item.angle) % 360;
                // Linear interpolate between rotating angle and fixed angle based on hoverProgress:
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
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  x,
                  y,
                  translateX: "-70px",
                  translateY: "-22px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <div className="relative flex items-center gap-3 bg-black border-2 border-purple-600 rounded-lg cursor-pointer px-3 py-2 min-w-[140px] shadow-sm">
                  <Icon
                    size={20}
                    stroke="none"
                    fill={item.color}
                    style={{ minWidth: 20, minHeight: 20 }}
                  />
                  <div
                    className="text-sm font-medium whitespace-nowrap"
                    style={{ userSelect: "none" }}
                  >
                    {item.name}
                  </div>
                </div>
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
          {/* <p className="mt-2 text-sm font-normal text-white">
            Explore different web solutions
          </p> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Orbital;
