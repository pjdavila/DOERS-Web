import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { t } = useTranslation();
  const [splineLoading, setSplineLoading] = useState(true);
  
  // Simular la finalización de la carga de Spline después de un tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplineLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center" id="hero">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-purple opacity-5 blur-[150px]"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-full bg-orange opacity-5 blur-[150px]"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(to right, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bebas text-5xl md:text-7xl xl:text-8xl leading-none mb-6">
              {t('hero.title.you')} <span className="text-orange drop-shadow-[0_0_10px_rgba(255,90,31,0.5)]">{t('hero.title.dream')}</span> {t('hero.title.it')},<br/>
              {t('hero.title.we')} <span className="text-purple drop-shadow-[0_0_10px_rgba(122,63,255,0.5)]">{t('hero.title.do')}</span> {t('hero.title.it')}.
            </h1>
            <p className="font-space text-xl md:text-2xl text-gray mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#work" 
                className="bg-orange text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-opacity-90 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.work')}
              </motion.a>
              <motion.a 
                href="#services" 
                className="border border-gray border-opacity-30 px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-5 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.services')}
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] md:h-[600px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Spline 3D Scene via iframe */}
            <div className="relative w-full h-full" style={{ position: 'relative' }}>
              <div className="relative w-full h-full">
                <iframe
                  src="https://app.spline.design/file/389cb7ae-877a-42af-83f2-77e6ec6579d3"
                  className={`w-full h-full rounded-3xl transition-opacity duration-500 ${splineLoading ? 'opacity-0' : 'opacity-100'}`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; vr"
                  title="DOERS 3D Scene"
                />
                
                {/* Loading indicator */}
                {splineLoading && (
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
              </div>
              
              {/* Tech elements floating around - these will be visible while Spline loads */}
              <motion.div 
                className="absolute top-1/4 right-1/4 z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 rounded-full bg-purple bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A3FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6" />
                    <path d="M8 6l-6 6 6 6" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 left-1/4 z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
              </motion.div>
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

export default HeroSection;
