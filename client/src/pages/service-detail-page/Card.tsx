import React from "react";
import { motion, MotionValue, useTransform, PanInfo } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  index: number;
  cardGap?: number;
  scaleFactor?: number;
  topOffset?: number;
  onDragStart?: () => void;
  onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  isActive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  progress,
  index,
  cardGap = 15,
  // scaleFactor = 0.05,
  topOffset = 40,
  onDragStart,
  onDragEnd,
  isActive = false,
}) => {
  // Calculate distance from current (front) card based on progress and index
  const distanceFromCurrent = useTransform(progress, (latest) => index - latest);

  // Transform values based on distance from current card - matching the reference image style
  const scale = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [0.85, 0.9, 0.95, 1, 0.95, 0.9, 0.85]
  );

  const rotateZ = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [-10, -6, -3, 0, 3, 6, 10]
  );

  const rotateY = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [35, 25, 15, 0, -15, -25, -35]
  );

  // Horizontal positioning - cards fan out to the sides like in the reference
  const translateX = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [-cardGap * 4, -cardGap * 2.5, -cardGap * 1.2, 0, cardGap * 1.2, cardGap * 2.5, cardGap * 4]
  );

  // Depth positioning for better 3D effect
  const translateZ = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [-cardGap * 3, -cardGap * 2, -cardGap, 0, -cardGap, -cardGap * 2, -cardGap * 3]
  );

  // Vertical offset for stacking effect - like cards being held in hand
  const translateY = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [topOffset * 1.5, topOffset, topOffset * 0.5, 0, topOffset * 0.5, topOffset, topOffset * 1.5]
  );

  // Z-index management - current card always on top
  const zIndex = useTransform(
    distanceFromCurrent,
    [-3, -2, -1, 0, 1, 2, 3],
    [1, 3, 5, 10, 5, 3, 1]
  );

  // Opacity for cards that are too far away
  const opacity = useTransform(
    distanceFromCurrent,
    [-4, -3, -2, -1, 0, 1, 2, 3, 4],
    [0, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0]
  );

  return (
    <motion.div
      className="card max-w-4xl w-full h-auto absolute"
      style={{
        scale,
        rotateZ,
        rotateY,
        x: translateX,
        z: translateZ,
        y: translateY,
        zIndex,
        opacity,
        transformStyle: "preserve-3d",
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.1}
      onDragStart={isActive ? onDragStart : undefined}
      onDragEnd={isActive ? onDragEnd : undefined}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};
