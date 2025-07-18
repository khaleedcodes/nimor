import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  Circle,
  Square,
  Triangle,
  Star,
  Hexagon,
  Heart,
  ArrowRight,
  // ChevronRight,
} from "lucide-react";
// import Button from "@/components/Button";
// const arrowVariants = {
//   initial: { x: 0 },
//   hover: { x: 5 },
// };

interface WebsiteType {
  name: string;
  ring: 1 | 2;
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

const baseRingRadii: Record<1 | 2, number> = {
  1: 180,
  2: 280,
};

const OrbitItem = ({
  item,
  radius,
  baseRotation,
  hoverProgress,
  scaleFactor,
  isHoveringItem,
  setIsHoveringItem,
}: {
  item: WebsiteType;
  radius: number;
  baseRotation: MotionValue<number>;
  hoverProgress: MotionValue<number>;
  scaleFactor: number;
  isHoveringItem: string | null;
  setIsHoveringItem: (name: string | null) => void;
}) => {
  const combinedAngle = useTransform(
    [baseRotation, hoverProgress],
    (values: number[]) => {
      const rot = values[0] as number;
      const hover = values[1] as number;
      const continuousAngle = rot + item.angle;
      const fixedAngle = item.angle;
      return continuousAngle * (1 - hover) + fixedAngle * hover;
    }
  );

  const springAngle = useSpring(combinedAngle, {
    stiffness: 150,
    damping: 30,
  });

  const x = useTransform(
    springAngle,
    (a: number) => Math.cos((a * Math.PI) / 180) * radius
  );
  const y = useTransform(
    springAngle,
    (a: number) => Math.sin((a * Math.PI) / 180) * radius
  );

  const Icon = item.Icon;

  return (
    <motion.div
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
};

const WebsiteOrbit = () => {
  const baseRotation = useMotionValue(0);
  const hoverProgress = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isHoveringItem, setIsHoveringItem] = useState<string | null>(null);

  // Use ref to track continuous rotation without modulo operations
  const continuousRotation = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const startContinuousRotation = () => {
      const animate = () => {
        if (!isHovering) {
          continuousRotation.current += 0.3; // Smooth rotation speed
          baseRotation.set(continuousRotation.current);
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    };

    startContinuousRotation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseRotation, isHovering]);

  useEffect(() => {
    animate(hoverProgress, isHovering ? 1 : 0, {
      type: "spring",
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

  const scaleFactor =
    windowWidth === null
      ? 1
      : windowWidth < 640
      ? 0.6
      : windowWidth < 1024
      ? 0.8
      : 1;

  const ringRadii: Record<1 | 2, number> = {
    1: baseRingRadii[1] * scaleFactor,
    2: baseRingRadii[2] * scaleFactor,
  };

  const maxRadius = Math.max(...Object.values(ringRadii));
  const orbitHeight = maxRadius * 2 + 120; // Add some vertical padding

  return (
    <div className="text-white flex items-center justify-center p-4 w-full overflow-hidden">
      <motion.div
        className="relative w-full max-w-4xl flex items-center justify-center"
        style={{ height: orbitHeight }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-b-2 border-dashed border-black"
          style={{
            width: ringRadii[2] * 2 + 650,
            zIndex: 5,
          }}
        />
        <div
          className="absolute bg-black rounded-full"
          style={{
            width: 12,
            height: 12,
            top: "50%",
            left: `calc(50% - ${(ringRadii[2] * 2 + 650) / 2}px - 1px)`,
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        />
        <div
          className="absolute bg-black rounded-full"
          style={{
            width: 12,
            height: 12,
            top: "50%",
            left: `calc(50% + ${(ringRadii[2] * 2 + 650) / 2}px + 1px)`,
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        />

        {[1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border-2 border-dashed border-black"
            style={{
              width: ringRadii[ring as 1 | 2] * 2,
              height: ringRadii[ring as 1 | 2] * 2,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + ring * 0.1, duration: 0.6 }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center z-40">
          {websiteTypes.map((item) => (
            <OrbitItem
              key={item.name}
              item={item}
              radius={ringRadii[item.ring]}
              baseRotation={baseRotation}
              hoverProgress={hoverProgress}
              scaleFactor={scaleFactor}
              isHoveringItem={isHoveringItem}
              setIsHoveringItem={setIsHoveringItem}
            />
          ))}
        </div>

        {/* <motion.div
          className="relative z-10 text-center flex flex-col gap-6 items-center max-w-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-black text-center">
            Need something different?
          </div>
          <motion.div
            initial="initial"
            whileHover="hover"
            className="inline-block cursor-pointer"
          >
            <Button className="pt-[6px] pb-[6px] pl-4 pr-4 flex text-sm items-center gap-1">
              Reach Out{" "}
              <motion.span variants={arrowVariants}>
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default WebsiteOrbit;
