import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import HeroSectionAlt from "@/components/sections/hero-section-alt";
import ServicesSection from "@/components/sections/services-section";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import { motion } from "framer-motion";

export default function Home() {
  const [useAltHero, setUseAltHero] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL contains ?alt=true
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const altParam = urlParams.get('alt');
      if (altParam === 'true') {
        setUseAltHero(true);
      }
    } catch (error) {
      console.error("Error parsing URL params:", error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        {useAltHero ? <HeroSectionAlt /> : <HeroSection />}
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Hero Toggle Button */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => {
            setUseAltHero(!useAltHero);
            // Update URL query parameter
            const url = new URL(window.location.href);
            url.searchParams.set('alt', (!useAltHero).toString());
            window.history.pushState({}, '', url);
          }}
          className="bg-gradient-to-r from-purple to-orange text-white px-3 py-2 rounded-md text-sm font-semibold shadow-lg"
        >
          {useAltHero ? "Usar Hero Original" : "Usar Hero Alternativo"}
        </button>
      </div>
    </motion.div>
  );
}
