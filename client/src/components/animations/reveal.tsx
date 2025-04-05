import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up" 
}: RevealProps) => {
  // Set initial and animate values based on direction
  let initialX = 0;
  let initialY = 0;

  switch (direction) {
    case "up":
      initialY = 50;
      break;
    case "down":
      initialY = -50;
      break;
    case "left":
      initialX = 50;
      break;
    case "right":
      initialX = -50;
      break;
  }

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, x: initialX, y: initialY }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
