import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

interface SplineUploadProps {
  splineFile: string;
  className?: string;
}

const SplineUpload: React.FC<SplineUploadProps> = ({ splineFile, className = '' }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Reset loading state when splineFile changes
    setLoading(true);
    setError(null);
  }, [splineFile]);

  const handleOnLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`w-full h-full relative ${className}`}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {!error && (
          <div
            onError={(e) => {
              console.error("Error loading Spline scene:", e);
              setError(new Error("Failed to load Spline scene"));
              setLoading(false);
            }}
          >
            <Spline
              scene={splineFile}
              onLoad={handleOnLoad}
              style={{ 
                width: '100%', 
                height: '100%',
                opacity: loading ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
                borderRadius: '1.5rem' // 24px/1.5rem matches rounded-3xl
              }}
            />
          </div>
        )}
        
        {/* Loading indicator */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-20 h-20 rounded-full border-4 border-t-transparent border-purple"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-12 h-12 rounded-full border-4 border-t-transparent border-orange"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
            <div className="bg-background p-6 rounded-xl max-w-xs text-center">
              <h3 className="text-lg font-bold text-red-500 mb-2">Error al cargar</h3>
              <p className="text-sm text-gray-300">
                No se pudo cargar el modelo 3D. Por favor, intenta más tarde.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplineUpload;