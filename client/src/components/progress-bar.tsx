import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isVisible, setIsVisible] = useState(false);
  
  // Only show progress bar after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-purple z-[9997]"
      style={{ 
        scaleX,
        transformOrigin: "0%",
        opacity: isVisible ? 1 : 0
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ProgressBar;
