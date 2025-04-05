import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const Parallax = ({
  children,
  speed = 0.2,
  direction = "up",
  className = ""
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Calculate transform values based on direction
  let x = useTransform(scrollYProgress, [0, 1], [0, 0]);
  let y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  
  switch (direction) {
    case "up":
      y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
      break;
    case "down":
      y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
      break;
    case "left":
      x = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
      break;
    case "right":
      x = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
      break;
  }
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ x, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Parallax;
