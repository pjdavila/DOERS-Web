import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SplineUpload from '../animations/spline-upload';

const HeroSectionAlt: React.FC = () => {
  const { t } = useTranslation();
  const [splineLoading, setSplineLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading to ensure all animations start properly
    const timer = setTimeout(() => {
      setSplineLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/30 z-10"></div>
      
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-8 z-20">
        <div className="flex flex-col h-full justify-center items-center max-w-7xl mx-auto pt-24 pb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 font-space"
              animate={{ 
                background: [
                  "linear-gradient(to right, #7A3FFF, #FF5A1F)",
                  "linear-gradient(to right, #FF5A1F, #7A3FFF)",
                  "linear-gradient(to right, #7A3FFF, #FF5A1F)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray mt-4 max-w-xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gradient-to-r from-purple to-orange rounded-full hover:brightness-110 focus:shadow-outline focus:outline-none">
                {t('hero.cta')}
              </a>
              <a href="#services" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full border-2 border-white/20 hover:bg-white/10 focus:shadow-outline focus:outline-none">
                {t('hero.services')}
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full max-w-5xl h-[400px] md:h-[500px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Spline 3D Scene via API */}
            <div className="w-full h-full" style={{ position: 'relative' }}>
              <SplineUpload 
                splineFile="/api/spline/scene%20(2).splinecode"
                className="rounded-3xl overflow-hidden"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray mb-2 font-space uppercase">{t('hero.scroll')}</span>
          <a href="#services" className="text-white opacity-60 hover:opacity-100 transition-opacity">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionAlt;