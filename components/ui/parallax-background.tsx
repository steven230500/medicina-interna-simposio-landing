"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground({
  className = "",
  circleClassName = "bg-primary/5",
}: {
  className?: string;
  circleClassName?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Different movement speeds for depth perception - INCREASED INTENSITY
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Circle 1 - Top Left */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className={`absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl ${circleClassName}`}
      />

      {/* Circle 2 - Bottom Right */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className={`absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-60 ${circleClassName}`}
      />

      {/* Circle 3 - Center (optional, subtle) */}
      <motion.div
        style={{ y: y3 }}
        className={`absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-40 ${circleClassName}`}
      />
    </div>
  );
}
