import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

interface SplineSceneProps {
  splineUrl: string;
  className?: string;
  fallbackContent?: React.ReactNode;
}

const SplineScene = ({ splineUrl, className = '', fallbackContent }: SplineSceneProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle loading state
  const onLoad = () => {
    setIsLoading(false);
    console.log("Spline scene loaded successfully");
  };

  // Set up error handling
  useEffect(() => {
    // For global errors (general JavaScript errors)
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.message.includes('Spline') || event.message.includes('buffer')) {
        console.error("Error loading Spline scene:", event.message);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Set a timeout to check if loading is taking too long
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn("Spline scene loading timeout - showing fallback");
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000); // 10 seconds timeout - giving more time for complex scenes
    
    window.addEventListener('error', handleGlobalError);
    
    return () => {
      window.removeEventListener('error', handleGlobalError);
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return (
    <div className={`relative ${className}`} style={{ position: 'relative' }}>
      {hasError && (
        // Show SVG fallback only if there's an error loading Spline
        fallbackContent || <SpaceAstronautSVG />
      )}
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="w-12 h-12 rounded-full border-4 border-t-transparent border-orange"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      
      {/* Attempt to load the Spline scene */}
      {!hasError && (
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} style={{ height: '100%' }}>
          <Spline 
            scene={splineUrl} 
            onLoad={onLoad}
          />
        </div>
      )}
    </div>
  );
};

// Fallback SVG Component with animation
const SpaceAstronautSVG = () => {
  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg width="350" height="350" viewBox="0 0 350 350" className="w-64 h-64 md:w-96 md:h-96">
          <circle cx="175" cy="175" r="175" fill="#111111" />
          <circle cx="175" cy="175" r="160" fill="#191919" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="5 5" />
          <g className="doernaut">
            <circle cx="175" cy="160" r="70" fill="#222222" strokeWidth="2" stroke="#7A3FFF" />
            <circle cx="175" cy="160" r="60" fill="#000000" />
            <rect x="150" y="145" width="50" height="35" rx="5" fill="#333333" />
            <rect x="155" y="150" width="40" height="25" rx="3" fill="#000000" />
            <circle cx="160" cy="162" r="5" fill="#FF5A1F" />
            <circle cx="175" cy="162" r="5" fill="#FF5A1F" />
            <circle cx="190" cy="162" r="5" fill="#FF5A1F" />
          </g>
          <g className="helmet-glare">
            <path d="M210 140 Q220 120 200 125" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.3" />
          </g>
          <g className="body">
            <rect x="160" y="230" width="30" height="60" rx="10" fill="#333333" />
            <rect x="150" y="290" width="50" height="20" rx="5" fill="#222222" />
            <rect x="165" y="180" width="20" height="50" rx="5" fill="#444444" />
            <circle cx="175" cy="215" r="15" fill="#333333" />
            <rect x="130" y="200" width="25" height="10" rx="5" fill="#444444" transform="rotate(-45 130 205)" />
            <rect x="195" y="200" width="25" height="10" rx="5" fill="#444444" transform="rotate(45 220 205)" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default SplineScene;