import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return;
    
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) return;
    
    // Add event listeners for interactive elements
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");
    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("hover");
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseup", handleMouseUp);
    });
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("mouseup", handleMouseUp);
      });
    };
  }, [isMobile]);
  
  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.8
    }
  };
  
  const outlineVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      borderColor: "#FF5A1F"
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      borderColor: "#7A3FFF"
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 0.8,
      borderColor: "#FF5A1F"
    }
  };
  
  if (isMobile) return null;
  
  return (
    <>
      <motion.div
        className="fixed w-2 h-2 bg-purple rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-10 h-10 border-2 border-orange rounded-full pointer-events-none z-[9998]"
        variants={outlineVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;
