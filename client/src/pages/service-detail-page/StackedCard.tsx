import React, { Children, useRef, useEffect, useState } from "react";
import {
  useMotionValue,
  PanInfo,
  animate,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { Card } from "./Card";

interface StackedCardProps {
  children: React.ReactNode[];
  cardGap?: number;
  scaleFactor?: number;
  topOffset?: number;
}

export const StackedCard: React.FC<StackedCardProps> = ({
  children,
  cardGap = 20,
  scaleFactor = 0.05,
  topOffset = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  console.log(isDragging);

  const length = Children.count(children);

  // Create a simple progress value based on current index
  const progress = useMotionValue(currentIndex);

  // Update progress when currentIndex changes
  useEffect(() => {
    animate(progress, currentIndex, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }, [currentIndex, progress]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(event);
    setIsDragging(false);

    const threshold = 80;
    const { offset } = info;

    if (offset.x > threshold && currentIndex > 0) {
      // Swipe right - go to previous card
      setCurrentIndex(currentIndex - 1);
    } else if (offset.x < -threshold && currentIndex < length - 1) {
      // Swipe left - go to next card
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={containerRef}
        className="w-full min-h-[750px] mx-auto flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl"
      >
        <div className="relative w-full h-[750px] flex items-center justify-center perspective-1000">
          {Children.map(children, (child, index) => (
            <Card
              key={index}
              progress={progress}
              index={index}
              cardGap={cardGap}
              scaleFactor={scaleFactor}
              topOffset={topOffset}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              isActive={index === currentIndex}
            >
              {child}
            </Card>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Navigation hints */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
            <p className="text-sm text-white">Drag cards to explore</p>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};
