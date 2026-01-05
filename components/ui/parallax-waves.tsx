"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ParallaxWaves() {
  const ref = useRef(null);
  const { scrollY } = useScroll(); // Use global window scroll

  // Map scroll pixels to movement.
  // We want the background to move noticeably.
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]); // Moves down 150px
  const y2 = useTransform(scrollY, [0, 1000], [0, 300]); // Moves down 300px
  const y3 = useTransform(scrollY, [0, 1000], [0, 450]); // Moves down 450px

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Layer 1 - Furthest / Slowest / Darkest */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-20 text-primary"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Layer 2 - Middle / Medium Speed */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-5%] left-0 right-0 h-[60vh] opacity-30 text-accent"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Layer 3 - Front / Fastest / Lightest */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-0 right-0 h-[70vh] opacity-10 text-white"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,160C672,171,768,213,864,224C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </div>
  );
}
